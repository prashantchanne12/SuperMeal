<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/cart.css">

    <style>

    </style>
</head>


<body>
    <div class="nav-title">
        <a href="../index.php">SuperMeal</a>
        <div class="cart">
            <img src="../images/shopping-bag.svg" alt="" class="cart-icon">
            <p class="cart-count">0</p>
        </div>
    </div>

    <div class="container">

        <div class="cart-items">

        </div>

        <div class="total">
            <h1>Total</h1>
            <p class="total-price"></p>
        </div>

        <form action="../includes/order.php" method="POST">
            <input type="hidden" name="cart" class="array" />
            <input type="hidden" name="quantity" class="quantity" />
            <div class="button-container">
                <button type="submit" class="order" name="order-submit">Order Now</button>
            </div>
        </form>
    </div>


    <script src="../js/cart.js"></script>
</body>

</html>