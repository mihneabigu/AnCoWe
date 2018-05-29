<?php

    include ("config.php");
    session_start();
    $error = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST"){



        $stmt = $conn->prepare("select username from users where username=? and password=?");
        $stmt->bind_param("ss", $username, $password);

        $username = $_POST['username'];
        $password = $_POST['password'];
        $stmt->execute();

        $result = $stmt->get_result();

        if ($result->num_rows == 1){
            $_SESSION['login_user'] = $username;
            header("location: home.php");
        } else {
            $error = "Your Login Name or Password is invalid";
        }
    }

?>