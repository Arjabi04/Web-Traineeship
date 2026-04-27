<?php include 'database.php'; ?>

<?php
$error = "";
$success = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize inputs
    $username = htmlspecialchars(trim($_POST['username']));
    $password = htmlspecialchars($_POST['password']);

    // escape for SQL safety
    $username = $conn->real_escape_string($username);

    // Check if username exists
    $result = $conn->query("SELECT id FROM users WHERE username = '$username'");

    if ($result->num_rows > 0) {
        $error = "Username already taken";
    } else {

        // Hash password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        // Insert into database
        $insert = $conn->query("
                INSERT INTO users (username, password)
                VALUES ('$username', '$hashedPassword')
            ");

        if ($insert) {
            $success = "Registration successful!";
        } else {
            $error = "Something went wrong: " . $conn->error;
        }
    }
}

?>

<!DOCTYPE html>
<html>

<head>
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <h2>Register</h2>

    <form method="POST">
        <input type="text" name="username" placeholder="Enter username" required><br><br>
        <input type="password" name="password" placeholder="Enter password" required><br><br>
        <button type="submit">Register</button>
    </form>

    <p style="color:red;">
        <?php echo $error; ?>
    </p>

    <p style="color:green;">
        <?php echo $success; ?>
    </p>

    <a href="login.php">Go to Login</a>

</body>

</html>