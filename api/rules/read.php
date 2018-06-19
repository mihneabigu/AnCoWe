<?php

include_once '../database/Database.php';

include_once '../entities/Rules.php';

$dbclass = new Database();
$connection = $dbclass->getConnection();

$rules = new Rules($connection);

$json = $rules->read();

echo $json;
?>