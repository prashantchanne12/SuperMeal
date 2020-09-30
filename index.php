<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuperMeal</title>
    <link rel="stylesheet" href="./css/main.css">
    <script src="https://kit.fontawesome.com/7f1e1a2168.js" crossorigin="anonymous"></script>

</head>

<body>
    <div class="landing"></div>
    <div class="text">
        <div class="title">
            <h1>Super</h1>
            <h1>Meal</h1>
        </div>
        <div class="subtitle">
            <p>Explore meals from all over the world</p>
        </div>
        <button class="btn">Check Out</a></button>
    </div>

    <div class="color"></div>

    <div class="navbar">
        <div class="nav-title"><a href="index.php">SuperMeal</a></div>
        <ul class="links">
            <li><a href="index.php" class="current">Home</a></li>
            <li><a href="./pages/nearby.php">Nearby Hotels</a></li>
            <li><a href="./pages/search.php">Search</a></li>

            <?php
            if (isset($_SESSION['id'])) {
                echo '<li><a href="./includes/logout.php">Log Out</a></li>';
            } else {
                echo '<li><a href="./pages/login.php">Log In</a></li>';
            }
            ?>
        </ul>
    </div>

    <div class="footer">
        <div class="logos">
            <i class="fab fa-facebook fa-2x"></i>
            <i class="fab fa-instagram fa-2x"></i>
            <i class="fab fa-twitter fa-2x"></i>
        </div>
    </div>


    <script src="./js/index.js"></script>
</body>

</html>