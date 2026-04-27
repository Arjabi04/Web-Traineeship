<?php
session_start();
session_unset(); //clear variables
session_destroy(); //delete the session

header("Location: login.php"); //redirect to login
exit();
