<?php

$servername = 'localhost';
$dbUserName = 'root';
$dbPassword = '';
$dbName = 'supermeal';


$conn = mysqli_connect($servername, $dbUserName, $dbPassword, $dbName);

if (!$conn) {
    die('Connection Failed' . mysqli_connect_error());
}
