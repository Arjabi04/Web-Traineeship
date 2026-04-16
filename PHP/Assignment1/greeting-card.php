<?php
$name = $_GET['name'];
$age = $_GET['age'];
$hobbies = $_GET['hobbies'];
$fav_color = $_GET['fav_color'];

//Sanitize
$name = htmlspecialchars($name);
$age = htmlspecialchars($age);
$hobbies = htmlspecialchars($hobbies);
$fav_color = htmlspecialchars($fav_color);

// Adult or minor?
$adult_or_minor;
if ($age < 18) {
    $adult_or_minor = "Minor";
} else {
    $adult_or_minor = "Adult";
}

// message based on favorite color
// If the favorite color is "red", display "Red is a bold choice!".
// If the favorite color is "blue", display "Blue is calming.".
// If the favorite color is "green", display "Green represents nature.".
// For any other color, display "That's an interesting choice!".
$fav_color = strtolower($fav_color);
$message;
switch ($fav_color) {
    case ("red"):
        $message = "Red is a bold choice!";
        break;
    case ("blue"):
        $message = "Blue is calming.";
        break;
    case ("green"):
        $message = "Green represents nature.";
        break;
    default:
        $message = "That's an interesting choice!";
        break;
}

// years lived loop
$years_lived = [];
for ($i = 0; $i <= $age; $i++) {
    $years_lived[$i] = $i;
}

// echo var_dump($years_lived);

// result
echo nl2br("Hello, $name !\n\n ");
echo nl2br("You are an $adult_or_minor \n\n");
echo nl2br("You're favorite color is $fav_color. $message\n \n ");
echo nl2br("Hobbies: $hobbies\n\n");
echo nl2br("Here is a list of the years you have lived:\n\n");

for ($j = 0; $j < $age; $j++) {
    echo nl2br($years_lived[$j] . "\n");
}
