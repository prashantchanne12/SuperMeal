<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SuperMeal</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/login.css">
</head>

<style>
    .error {
        color: #fff;
        font-size: 0.8rem;
        background-color: #e74c3c;
        margin-top: 0.8rem;
        margin-left: 3px;
        padding: 0.3rem 0.5rem;
        border-radius: 4px;
    }
</style>


<body>
    <div class="container">

        <div class="login-form">
            <h2>Login</h2>

            <?php
            if (isset($_GET['error'])) {
                if (isset($_GET['error']) == 'wrongpassword') {
                    echo '<p class="error">*Invalid username or password</p>';
                }
            } ?>

            <form action="../includes/login-auth.php" method="post">
                <input type="text" name="email_uid" id="email" placeholder="Username or Email Id" required>
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