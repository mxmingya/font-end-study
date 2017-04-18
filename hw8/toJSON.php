<?php
    echo "PHP file reached!";
    $last_name = $_REQUEST["last_name"];
    $first_name = $_REQUEST["first_name"];
    $address_line1 = $_REQUEST["address_line1"];
    $address_line2 = $_REQUEST["address_line2"];
    $city = $_REQUEST["city"];
    $state = $_REQUEST["state"];

    $JSONResponse = "{";
    // create a JSON response of the form submitted data
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $JSONResponse = $JSONResponse . "\tLast Name: \"$last_name\"";
        $JSONResponse = $JSONResponse . "\tFirst Name: \"$first_name\"";
        $JSONResponse = $JSONResponse . "\tAddress Line1: \"$address_line1\"";
        $JSONResponse = $JSONResponse . "\tAddress Line2: \"$address_line2\"";
        $JSONResponse = $JSONResponse . "\tCity: \"$city\"";
        $JSONResponse = $JSONResponse . "\tState: \"$state\"";
        $JSONResponse = $JSONResponse . "}";
        //echo $JSONResponse === "" ? "" : $JSONResponse;
    }

    // Output the result if the form was submitted
    echo $JSONResponse === "???" ? "" : $JSONResponse;

?>