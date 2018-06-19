<?php

include_once '../database/Database.php';

include_once '../entities/Scoreboard.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$scoreboard = new Scoreboard($connection);

$json = $scoreboard->read();

echo $json;
?>