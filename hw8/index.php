<?php
session_start();

 ?>

<html>
<head>
    <link rel="stylesheet" href="stylesheet.css">
    <script src="script.js"></script>
    <title>form</title>
    <meta charset="UTF-8">
</head>

<body>
<script src="script.js"></script>
  <form id="form1" action="parser.php" method="POST">
      First name:
      <input type="text" name='fist_name' id="first_name" required><br>


      Last name:
      <input type="text" name='last_name' id="last_name" required><br>


      Address Line 1:
      <input type="text" name='address1' id="address_line1"  required><br>


      Address Line 2:
      <input type="text" name='address2' id="address_line2" required><br>

      City:
      <input type="text" name='city' id="city"  required><br>

      State:
        <input type="text" name='state' id="state" required><br>


      Zip Code:
        <input type="text" name='zipcode' id="zipcode" required><br>

      </form>

  <button type="submit" id="submit" form="form1" onclick='submit_button'>Submit</button>
  <button id="cancel" onclick='cancel_button'> Cancel </button>
  <h1 id="demo"></h1>
  <h2>Tested by Chrome, Safari, Chrome Canary</h2>
  </body>
  </html>
