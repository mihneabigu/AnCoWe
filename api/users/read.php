<?php

include_once '../database/Database.php';

include_once '../entities/User.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$user = new User($connection);

$json = $user->read();

echo $json;
?>