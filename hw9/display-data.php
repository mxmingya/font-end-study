<html>
<head>
<title>Display Data into DB</title>
</head>

<body>
  <h1>Display Data from DB</h1>


<?php

include('database.php');
$sqlget = "SELECT * FROM people";
$sqldata = mysql_query($dbcon, $sqlget) or die('error getting data');

echo "<table>
<tr>
<th>
ID
</th>
<th>
First Name
</th>
<th>
Last Name
</th>
</tr>";

while($row = mysql_fetch_array($sqldata, MYSQLI_ASSOC)) {
  echo "<tr><td>";
  echo $row['peopleid'];
  echo"</td></tr>";
  echo $row['firstname'];
  echo"</td></tr>";
  echo $row['lastname'];
  echo"</td></tr>";
}
echo "</table>";

 ?>

</body>
