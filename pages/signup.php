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
            <h2>Sign Up</h2>

            <form action="../includes/signup-auth.php" method="post">
                <input type="text" name="uid" id="uid" placeholder="Username" required>
                <input type="text" name="email" id="email" placeholder="Email Id" required>
                <input type="password" name="password" id="password" placeholder="Password" required>
                <input type="password" name="c-password" id="c-password" placeholder="Confirm Password" required>
                <button type="submit" name="signup-submit">Sign Up</button>
            </form>
            <div class="signup-link">
                <p>Already have an account ?</p>
                <a href="./login.php">Log In</a>
            </div>
        </div>
    </div>

</body>

</html>