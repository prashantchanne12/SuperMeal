<?php

if (isset($_POST['signup-submit'])) {

    require 'db.php';

    $username = $_POST['uid'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['c-password'];

    if (empty($username) || empty($email) || empty($password) || empty($confirmPassword)) {
        header("Location: ../pages/signup.php?error=emptyfields&uid=" . $username . "&email=" . $email);
        exit();
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL) && !preg_match("/^[a-zA-Z0-9]*$/", $username)) {
        header("Location: ../pages/signup.php?error=invalidmailuid");
        exit();
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../pages/signup.php?error=invalidmail");
        exit();
    } else if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
        header("Location: ../pages/signup.php?error=invaliduid");
        exit();
    } else if ($password !== $confirmPassword) {
        header("Location: ../pages/signup.php?error=passwordcheck&email=" . $email . "uid" . $username);
        exit();
    } else {

        $sql = "SELECT username FROM users WHERE id=?";
        $statement = mysqli_stmt_init($conn);

        if (!mysqli_stmt_prepare($statement, $sql)) {
            header("Location: ../pages/signup.php?error=sqlerror_1");
            exit();
        } else {
            mysqli_stmt_bind_param($statement, "s", $username);
            mysqli_stmt_execute($statement);
            mysqli_stmt_store_result($statement);
            $resultCheck = mysqli_stmt_num_rows($statement);

            if ($resultCheck > 0) {
                header("Location: ../pages/signup.php?error=usertaken&email=" . $email);
                exit();
            } else {

                $sql = "INSERT INTO users (username, email, pwd) VALUES (?, ?, ?)";
                $statement = mysqli_stmt_init($conn);


                if (!mysqli_stmt_prepare($statement, $sql)) {
                    header("Location: ../pages/signup.php?error=sqlerror_2");
                    exit();
                } else {

                    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

                    mysqli_stmt_bind_param($statement, "sss", $username, $email, $hashedPassword);
                    mysqli_stmt_execute($statement);

                    header("Location: ../pages/signup.php?signup=success");
                    exit();
                }
            }
        }
    }
} else {
    header("Location: ../pages/signup.php");
    exit();
}
