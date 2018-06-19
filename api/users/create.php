<?php

include_once '../database/Database.php';

include_once '../entities/User.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$user = new User($connection);

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$user->username = $username;
$user->email = $email;
$user->password = $password;

$response = json_decode($user->create(), true);

if ($response['message'] == "OK"){
    echo "OK";
} else {
    echo $response['message'];
}
?>