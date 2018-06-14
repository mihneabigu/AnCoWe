<?php
session_start();
include("config.php");
$username = $_SESSION['login_user'];
$var = $_POST['checkpointX'];
$var2 = $_POST['checkpointY'];
$stmt = $conn->prepare("update game_state set checkpointX=?, checkpointY=? where id_user=(select id from users where username=?)");
$stmt->bind_param("iis",$var,$var2, $username);
$stmt->execute();
?>