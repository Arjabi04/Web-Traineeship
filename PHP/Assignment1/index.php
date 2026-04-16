<?php

?>
<style>
    label {
        height: 32px;
    }
</style>

<body style="margin: 24px;">
    <h1>Hi! </h1>
    <h2>Please fill out this form</h2><br>
    <div style="border: 1px solid black; padding: 30px; width: fit-content; border-radius: 10%">

        <form method="GET" action="greeting-card.php">
            <div style="display: grid; grid-template-columns: 150px 1fr; gap: 30px;  ;">

                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="eg.: John" required>

                <label for="age">Age:</label>
                <input type="number" id="age" name="age" placeholder="eg.: 20" required>
                <label for="hobbies">Hobbies:</label>
                <input type="text" id="hobbies" name="hobbies" placeholder="eg.: Reading" required>

                <label for="fav_color">Favorite Color:</label>
                <input type="text" id="fav_color" name="fav_color" placeholder="eg.: Blue" required>

                <button type="submit" style="border:0px; background-color: #274161; color:white;padding:8px 24px;  border-radius: 10%; grid-column: 2;  ">Submit</button>
            </div>
        </form>
    </div>
</body>