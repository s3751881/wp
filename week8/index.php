<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
<?php
    echo "<h1>Hello world!</h1>";
    echo "<p>The time is " . date("g:i a") . "</p>";
  ?>
  <p>Your RMIT id is <?= $_SESSION['PHP_AUTH_USER'] ?>.</p>
</body>
</html>