<?php

session_start();

include_once '../database/Database.php';

include_once '../entities/User.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$user = new User($connection);

$username = $_POST['username'];
$password = $_POST['password'];

$user->username = $username;
$user->password = $password;

$response = json_decode($user->login(), true);

if ($response['message'] == "OK"){
    echo "OK";
} else {
    echo $response['message'];
}
?>