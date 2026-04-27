<?php include 'database.php'; ?>

<?php
// If not logged in, redirect to login
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>

<head>
    <title>Welcome</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h2 style="text-align: center;">Welcome,
        <?php echo htmlspecialchars($_SESSION['user']); ?>
        <br> to<br>
        Assignment 3 submission
    </h2><br>
    <a href="logout.php" style="background-color: red;">Logout</a>
</body>

</html>