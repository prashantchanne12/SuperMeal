<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuperMeal</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/nearby.css">
    <script src="https://kit.fontawesome.com/7f1e1a2168.js" crossorigin="anonymous"></script>

</head>

<body>

    <div class="navbar">
        <div class="nav-title"><a href="../index.php">SuperMeal</a></div>
        <ul class="links">
            <li><a href="../index.php">Home</a></li>
            <li><a href="./pages/nearby.php" class="current">Nearby Hotels</a></li>
            <li><a href="./search.php">Search</a></li>
            <?php
            if (isset($_SESSION['id'])) {
                echo '<li><a href="./includes/logout.php">Log Out</a></li>';
            } else {
                echo '<li><a href="../pages/login.php">Log In</a></li>';
            }
            ?>
        </ul>
    </div>


    <h2 class="location"></h2>

    <div class="container">
        <div class="hotels">

        </div>
    </div>


    <script src="../js/nearby.js"></script>
</body>

</html>