<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/cart.css">

    <style>
        .menu {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 500px;

        }

        .quantity,
        .close {
            cursor: pointer;
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        .close {
            font-size: 1rem;
            justify-content: flex-end;
        }

        .close {
            padding-left: 3.8rem;
        }

        .cart-tab {
            width: 500px;
            margin-left: 5.4rem;
            display: flex;
            justify-content: space-evenly;
        }

        .cart-tab p {
            font-size: 0.9rem;
            color: #1db6b6;
            font-weight: bold;
        }

        .cart-tab p:first-child {
            margin-right: 1rem;
        }

        .line {
            height: 1px;
            margin-top: 1.2rem;
            margin-bottom: 1.2rem;
            width: 90%;
            background-color: #1db6b65e;
        }

        .total {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: #1db6b6;
        }

        .total .total-price {
            color: #333;
            padding-left: 1rem;
            font-size: 1.8rem;
        }
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
        <div class="cart-tab">
            <p>Item</p>
            <p>Quantity</p>
        </div>
        <div class="line"></div>
        <div class="cart-items">

        </div>

        <div class="total">
            <h1>Total</h1>
            <p class="total-price">₹ 1200</p>
        </div>
    </div>


    <script src="../js/cart.js"></script>
</body>

</html>