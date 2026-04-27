<?php
session_start();
$host = "127.0.0.1";
$user = "root";
$pass = "";
$db = "php_assignment_3";

$conn = new mysqli($host, $user, $pass);

// create database if does not exist
$sql_db = "CREATE DATABASE IF NOT EXISTS $db";
if ($conn->query($sql_db) === TRUE) {
    // Select the database only after ensuring it exists
    $conn->select_db($db);
} else {
    die("Error creating database: " . $conn->error);
}

// if ($conn->connect_error) {
//     die("Database connection failed: " . $conn->connect_error);
// } else {
//     echo "Database connected successfully";
// }

$conn->select_db($db);

$table = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)";

// if ($conn->query($table) === TRUE) {
//     echo "Table created or already exists";
// } else {
//     echo "Error creating table: " . $conn->error;
// }
