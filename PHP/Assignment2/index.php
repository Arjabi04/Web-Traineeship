<?php

require_once "romanCalculator.php";

$number = "";
$result = "";

if (isset($_GET['number'])) {
    $number = $_GET['number'];
    $number = htmlspecialchars($number);
    $converter = new RomanConverter();
    $result = $converter->convert($number);
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Roman Calculator</title>
</head>

<body style="margin: 24px">
    <div style="border: 1px solid black; padding: 24px; width: fit-content; border-radius:24px">
        <h2>Roman Numeral Converter</h2>

        <form method="GET">
            Enter number(1-3999):
            <input type="number" name="number" min="1" max="3999" placeholder="eg: 123" style="width: 110px;"><br>
            <div style="text-align: right; margin:12px">
                <button type="submit" style="border:0px; background-color:#204b91; padding: 10px; border-radius:12px; color:white; ">Convert</button>
            </div>
        </form>

        <br>

        <?php
        echo nl2br($result);

        ?>
    </div>
</body>

</html>