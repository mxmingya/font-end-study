<?php

    $last_name = $_REQUEST["last_name"];
    $first_name = $_REQUEST["first_name"];
    $address_line1 = $_REQUEST["address_line1"];
    $address_line2 = $_REQUEST["address_line2"];
    $city = $_REQUEST["city"];
    $state = $_REQUEST["state"];


    // create a JSON response of the form submitted data
    if (count($_REQUEST) > 0) {
        $JSONResponse = "{";
        $JSONResponse = $JSONResponse . "\tLast Name: \"$last_name\"";
        $JSONResponse = $JSONResponse . "\tFirst Name: \"$first_name\"";
        $JSONResponse = $JSONResponse . "\tAddress Line1: \"$address_line1\"";
        $JSONResponse = $JSONResponse . "\tAddress Line2: \"$address_line2\"";
        $JSONResponse = $JSONResponse . "\tCity: \"$city\"";
        $JSONResponse = $JSONResponse . "\tState: \"$state\"";
        $JSONResponse = $JSONResponse . "}";
    }

    // Output the result if the form was submitted
    echo $JSONresponse === "" ? "" : $JSONresponse;

?>