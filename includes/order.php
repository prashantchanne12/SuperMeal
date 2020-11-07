<?php

session_start();


if (isset($_POST['order-submit'])) {
    require 'db.php';

    $cartIds = $_POST['cart'];
    $userId = $_SESSION['id'];

    $integerIDs = array_map('intval', explode(',', $cartIds));

    foreach ($integerIDs as $value) {

        $sql = "INSERT INTO orders (userId, productId) 
                VALUES ($userId , $value )
        ";

        if (mysqli_query($conn, $sql)) {
            echo "Inserted new Record!";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}
