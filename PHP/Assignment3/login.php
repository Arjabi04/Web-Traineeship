<?php include 'database.php'; ?>

<?php
$error = "";

// If already logged in redirect to landing page
if (isset($_SESSION['user'])) {
        header("Location: landing-page.php");
        exit();
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST['username']) || empty($_POST['password'])) {
                $error = "All fields are required";
        } else {
                $username = trim($_POST['username']);
                $password = $_POST['password'];

                // Get user from database
                $result = $conn->query("SELECT * FROM users WHERE username = '$username'");

                if ($result->num_rows == 1) {
                        $user = $result->fetch_assoc();
                        // verify password
                        if (password_verify($password, $user['password'])) {
                                // start session
                                $_SESSION['user'] = $user['username'];
                                // redirect to landing 
                                header("Location:landing-page.php");
                                exit();
                        } else {
                                $error = "Invalid password";
                        }
                } else {
                        $error = "User not found";
                }
        }
}
?>

<!DOCTYPE html>
<html>

<head>
        <title>Login</title>
        <link rel="stylesheet" href="style.css">
</head>

<body>
        <h2>Login</h2>

        <form method="POST">
                <input type="text" name="username" placeholder="Username"><br><br>
                <input type="password" name="password" placeholder="Password"><br><br>
                <button type="submit">Login</button>
        </form>
        <p style="color:red;">
                <?php echo $error; ?>
        </p>
        <a href="register.php">Register</a>

</body>

</html>