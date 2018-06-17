<?php
session_start();
include("config.php");
$username = $_SESSION['login_user'];
$stmt = $conn->prepare("select checkpointX, checkpointY, spell1, spell2, spell3, spell4, spell5, level from game_state where id_user=(select id from users where username=?)");
$stmt->bind_param("s",$username);
$stmt->execute();
$result = $stmt->get_result();
$resArray = mysqli_fetch_assoc($result);
echo json_encode($resArray);
?>