<?php

session_start();

include_once '../database/Database.php';

include_once '../entities/Gamestate.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$gamestate = new Gamestate($connection);

$username = $_SESSION['login_user'];
$gamestate->user->username = $username;

$checkX = $_POST['checkpointX'];
$checkY = $_POST['checkpointY'];
$spell1 = $_POST['spell1'];
$spell2 = $_POST['spell2'];
$spell3 = $_POST['spell3'];
$spell4 = $_POST['spell4'];
$spell5 = $_POST['spell5'];
$level = $_POST['level'];

$gamestate->checkX = $checkX;
$gamestate->checkY = $checkY;
$gamestate->spell1 = $spell1;
$gamestate->spell2 = $spell2;
$gamestate->spell3 = $spell3;
$gamestate->spell4 = $spell4;
$gamestate->spell5 = $spell5;
$gamestate->level = $level;


$gamestate->writeCheckpoint();

?>