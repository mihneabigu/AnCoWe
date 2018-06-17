<?php
session_start();
include("config.php");
$username = $_SESSION['login_user'];
$var = $_POST['message'];
$stmt = $conn->prepare("select score from game_state where id_user=(select id from users where username=?)");
$stmt->bind_param("s",$username);
$stmt->execute();
$result = $stmt->get_result();
$scor = mysqli_fetch_assoc($result)['score'];
if ($var > $scor){
    $stmt = $conn->prepare("update game_state set score=? where id_user=(select id from users where username=?)");
    $stmt->bind_param("is",$var,$username);
    $stmt->execute();
}
?>