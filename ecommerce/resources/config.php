<?php 
ob_start();
session_start(); // turn on session to get start later 
defined("DS") ? null : define("DS",DIRECTORY_SEPARATOR);
  // echo _DIR_ ; magic constant to get to the directory of file
defined("TEMPLATE_FRONT") ? null : define("TEMPLATE_FRONT", __DIR__ . DS . "templates/frontend" );
defined("TEMPLATE_BACK") ? null : define("TEMPLATE_BACK", __DIR__ . DS . "templates/backend" );
// define database connection including host port user pas and name 
$servername = "localhost";
$username = "root";
$password = "root";
$port = 3307;
$databasename = "ecommerce";

// Create connection
$conn = mysqli_connect("$servername:$port", $username, $password,$databasename);

// $connection = mysqli_connect(DB_HOST,DB_PORT,DB_USER,DB_PASS,DB_NAME);

require_once("functions.php");

?>