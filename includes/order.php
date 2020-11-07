<?php

session_start();


if (isset($_POST['order-submit'])) {
    require 'db.php';

    $cartIds = $_POST['cart'];
    $quantities = $_POST['quantity'];
    $userId = $_SESSION['id'];

    $integerIDs = array_map('intval', explode(',', $cartIds));
    $quantityIntegers = array_map('intval', explode(',', $quantities));



    foreach ($integerIDs as $index => $id) {

        $sql = "INSERT INTO orders (userId, productId, quantity) 
                VALUES ($userId , $id, $quantityIntegers[$index] )
        ";

        if (mysqli_query($conn, $sql)) {
            echo "Inserted new Record!";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}
