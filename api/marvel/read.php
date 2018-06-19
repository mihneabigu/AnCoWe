<?php

include_once '../database/Database.php';

include_once '../entities/Marvel.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$marvel = new Marvel($connection);

$json = $marvel->read();

echo $json;
?>