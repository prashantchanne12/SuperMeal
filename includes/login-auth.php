<?php

if (isset($_POST['login-submit'])) {

    require 'db.php';

    $username_email = $_POST['email_uid'];
    $password = $_POST['password'];

    if (empty($username_email) || empty($password)) {
        header("Location: ../pages/login.php?error=emptyfields&email_uid=" . $username_email);
        exit();
    } else {
        // SQL QUERY
        $sql = 'SELECT * FROM users WHERE username=? OR email=?';
        // INITIALIZING THE CONNECTION WITH DB
        $stmt = mysqli_stmt_init($conn);

        // CHECK IF THE SQL QUERY RUNS INSIDE THE DB    
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: ../pages/login.php?error=sqlerror_1");
            exit();
        } else {
            // PUTTING THE INFO IN STATMENT AND RUNNING THROUGH DB
            mysqli_stmt_bind_param($stmt, "ss", $username_email, $username_email);
            mysqli_stmt_execute($stmt);

            // GETTING RESULT   
            $result = mysqli_stmt_get_result($stmt);

            if ($row = mysqli_fetch_assoc($result)) {

                // CHECKING IF THE DB PASSWORD MATCHES THE LOGIN PASSWORD
                $passwordCheck = password_verify($password, $row['pwd']);

                if ($passwordCheck == false) {
                    header("Location: ../pages/login.php?error=wrongpassword");
                    exit();
                } else {
                    session_start();
                    $_SESSION['id'] = $row['id'];
                    $_SESSION['username'] = $row['username'];
                    $_SESSION['email'] = $row['email'];
                    header("Location: ../index.php?login=success");
                    exit();
                }
            } else {
                header("Location: ../pages/login.php?error=nouser");
                exit();
            }
        }
    }
} else {
    header("Location: ../pages/login.php");
    exit();
}
