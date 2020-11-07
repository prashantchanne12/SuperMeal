<?php
session_start();

require '../includes/db.php';

$sql = 'SELECT * FROM orders';
$result = mysqli_query($conn, $sql);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orders</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/order.css">

</head>

<body>

    <div class="navbar">
        <div class="nav-title"><a href="../index.php">SuperMeal</a></div>
        <ul class="links">
            <li><a href="../index.php">Home</a></li>
            <li><a href="./nearby.php">Nearby Hotels</a></li>
            <li><a href="./search.php">Search</a></li>
            <?php
            if (isset($_SESSION['id'])) {
                echo '<li class="profile">Profile</li>';
            } else {
                echo '<li><a href="./pages/login.php">Log In</a></li>';
            }
            ?>
        </ul>
    </div>


    <div class="profile-options">
        <ul>
            <li><a href="./cart.php">My Cart</a></li>
            <li><a href="./order.php">My Orders</a></li>
            <li><a href="./includes/logout.php">Log Out</a></li>
        </ul>
    </div>

    <div class="container">
        <div class="order-wrapper">

            <?php

            $prods = array();
            $quantities = array();

            if (mysqli_num_rows($result) > 0) {
                echo "<h1>Your Orders</h1>";
                while ($row = mysqli_fetch_assoc($result)) {

                    array_push($prods,  $row['productId']);
                    array_push($quantities,  $row['quantity']);
                }
            } else {
                echo "<h1> No Oders For Now! </h1>";
            }

            foreach ($prods as $index => $id) {
                $sql = "SELECT * FROM products WHERE id = $id";

                $result = mysqli_query($conn, $sql);

                if (mysqli_num_rows($result) > 0) {
                    while ($row = mysqli_fetch_assoc($result)) {
                        echo "<div class=menu id=" . $row["id"] . ">
                                <section class=details>
                                    <div class=image-container>
                                        <img src=" . $row["img"] . " class=menu-img>
                                    </div>
                                    <div class=menu-details>
                                        <h3 class=menu-title>" . $row["prod_name"] . "</h3>
                                        <div class=menu-rating>
                                            <i class=fa fa-star style=color:royalblue;>☆</i>
                                            <p class=ratings>" . $row["rating"] . "</p>
                                            <p class=total-votes>( " . $row["votes"] . " )</p>
                                        </div>
                                    </div>
                                </section>
                                <div class=quantity>" . $quantities[$index] . "</div>
                                <div class=price>₹ " . $row["price"] . "</div>
                            </div>
                             <div class=line></div>";
                    }
                } else {
                    echo "0 results";
                }
            }

            ?>




        </div>
    </div>

    <script src="https://kit.fontawesome.com/7f1e1a2168.js" crossorigin="anonymous"></script>

    <script src="../js/order.js"></script>
</body>

</html>