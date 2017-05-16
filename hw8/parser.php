<?php
    session_start();

    $last_name = $_POST["last_name"];
    $first_name = $_POST["first_name"];
    $address_line1 = $_POST["address_line1"];
    $address_line2 = $_POST["address_line2"];
    $city = $_POST["city"];
    $state = $_POST["state"];
    $zipcode = $_POST['zipcode'];

  	if(!isset($_SESSION['info'])) {
  		$_SESSION['info'] = $_SESSION['info'] . '{ <br> last name: "' . $last_name . '"'  . "<br>"
  		. '   first name: "' . $first_name . '"'  . "<br>"
  		. '   address line 1: "' . $address_line1 . '"'  . "<br>"
  		. '   address line 2: "' . $address_line2 . '"'  . "<br>"
  		. '   city: "' . $city . '"'  . "<br>"
  		. '   state: "' . $state . '"'  . "<br>"
  		. '   zip: "' . $zipcode . '"'
  		. '<br> }';
  	} else {
  		$_SESSION['info'] = $_SESSION['info'] . ',<br>{ <br> last name: "' . $last_name . '"'  . "<br>"
  		. '   first name: "' . $first_name. '"'  . "<br>"
  		. '   address line 1: "' . $address_line1 . '"'  . "<br>"
  		. '   address line 2: "' . $address_line2 . '"'  . "<br>"
  		. '   city: "' . $city . '"'  . "<br>"
  		. '   state: "' . $state . '"'  . "<br>"
  		. '   zip: "' . $zipcode . '"'
  		. '<br> }';
  	}

	   echo '{<br>' . $_SESSION['info'] . '<br>}';
?>
