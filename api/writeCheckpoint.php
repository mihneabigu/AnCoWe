<?php
session_start();
include("config.php");
$username = $_SESSION['login_user'];
$var = $_POST['checkpointX'];
$var2 = $_POST['checkpointY'];
$spell1 = $_POST['spell1'];
$spell2 = $_POST['spell2'];
$spell3 = $_POST['spell3'];
$spell4 = $_POST['spell4'];
$spell5 = $_POST['spell5'];
$level = $_POST['level'];
$stmt = $conn->prepare("update game_state set checkpointX=?, checkpointY=?, spell1=?, spell2=?, spell3=?, spell4=?, spell5=?, level=? where id_user=(select id from users where username=?)");
$stmt->bind_param("iiiiiiiis",$var,$var2, $spell1, $spell2, $spell3, $spell4, $spell5, $level, $username);
$stmt->execute();
?>