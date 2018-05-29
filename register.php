<?php

include ("config.php");
session_start();
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST"){



    $stmt = $conn->prepare("select username from users where username=? or email=?");
    $stmt->bind_param("ss", $username, $email);

    $username = $_POST['username'];
    $email = $_POST['email'];
    $stmt->execute();

    echo $email;

    $result = $stmt->get_result();

    if ($result->num_rows > 0){
        $error = "Username or Email already in use";
    } else {
        $password = $_POST['password'];
        $stmt = $conn->prepare("insert into users (username, email, password) values (?, ?, ?)");
        $stmt->bind_param("sss",$username, $email, $password);
        $stmt->execute();
        header("location: index.php");
    }
}

?>