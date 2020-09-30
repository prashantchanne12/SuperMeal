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
    <link rel="stylesheet" href="../css/search.css">

</head>

<body>
    <div class="navbar">
        <div class="nav-title"><a href="../index.php">SuperMeal</a></div>
        <ul class="links">
            <li><a href="../index.php">Home</a></li>
            <li><a href=" ./nearby.php">Nearby Hotels</a></li>
            <li><a href="./search.php" class="current">Search</a></li>

            <?php
            if (isset($_SESSION['id'])) {
                echo '<li><a href="./includes/logout.php">Log Out</a></li>';
            } else {
                echo '<li><a href="../pages/login.php">Log In</a></li>';
            }
            ?>
        </ul>
    </div>

    <div class="container">
        <div class="wrapper">
            <select id="country">
                <option value="3">Mumbai</option>
                <option value="4">Bengaluru</option>
                <option value="1">Delhi</option>
                <option value="6">Hyderabad</option>
                <option value="5">Pune</option>
            </select>
            <form>
                <input type="text" name="search" placeholder="Search Restaurants...">
            </form>
        </div>

        <div class="hotel-search">

        </div>

    </div>

    <script src="../js/search.js"></script>
</body>

</html>