<?php

session_start();

include_once '../database/Database.php';

include_once '../entities/Gamestate.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$gamestate = new Gamestate($connection);

$username = $_SESSION['login_user'];
$gamestate->user->username = $username;

$json = $gamestate->readCheckpoint();

echo $json;
?>