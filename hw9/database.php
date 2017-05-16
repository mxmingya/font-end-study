<?php
    include 'addressbook.sql';

    $servername = "localhost:63342/";
    $username = "username";
    $password = "password";
    $dbname = "myDB";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    if (isset($_POST)) {

        $sql = "SELECT * FROM `addressbook` ORDER BY ";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
                echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
            }
        } else {
            echo "0 results";
        }

        mysqli_close($conn);
    }else {
        //if the POST is empty
        $sql = "INSERT INTO `addressbook` (`ID`, `First Name`, `Last Name`, `Address Line 1`,
        `Address Line 2`, `City`, `State`, `Zip Code`) VALUES ('need to config.');";
    }


?>