<?php

include_once '../database/Database.php';

include_once '../entities/User.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$user = new User($connection);

$id = $_GET['id'];

$user->id = $id;

$json = $user->readOne();

echo $json;
?>