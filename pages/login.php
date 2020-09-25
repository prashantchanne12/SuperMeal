<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuperMeal</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/login.css">
</head>

<body>
    <div class="container">

        <div class="login-form">
            <h2>Login</h2>

            <form action="../includes/login-auth.php" method="post">
                <input type="text" name="email" id="email" placeholder="Email Id" required>
                <input type="password" name="password" id="password" placeholder="Password" required>
                <button type="submit" name="login-submit">Log In</button>
            </form>
            <div class="signup-link">
                <p>Don't have an account ?</p>
                <a href="./signup.php">Sign Up</a>
            </div>
        </div>
    </div>

</body>

</html>