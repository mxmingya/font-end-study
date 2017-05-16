<?php
?>


<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
    <title>Untitle File</title>
</head>
<body>
<h2>AddressBook</h2>
<form id="form" method="POST" action="database.php">
    First Name: <input id="first_name" name="first_name" type="text"><br>
    Last Name: <input id="last_name" name="last_name" type="text"><br>
    Address Line 1: <input id="add1" name="add1" type="text"><br>
    Address Line 2: <input id="add2" name="add2" type="text"><br>
    City: <input id="city" name="city" type="text"><br>
    State: <input id="state" name="state" type="text"><br>
    Zip Code: <input id="zip" name="zip" type="text"><br>
    <button id="button" name="button" onclick="check_vali()">submit</button>
    <button id="button" name="button" onclick="">contacts</button>
</form>
<div id="display"></div>
</body>
</html>
