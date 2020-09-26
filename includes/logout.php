<?php

session_start();

// DELETES ALL THE VALUES INSIDE THE SESSION VARIABLE
session_unset();

// DESTROY THE SESSION
session_destroy();

header("Location: ../index.php");
exit();
