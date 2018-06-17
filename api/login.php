<?php
session_start();
include ('config.php');
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $stmt = $conn->prepare("select password from users where username=?");

    $username = $_POST['username'];
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows == 1){
        $result = mysqli_fetch_assoc($result);
        $password = $_POST['password'];
        if (password_verify($password, $result['password'])){
            $_SESSION['login_user'] = $username;
            $_SESSION['loggedin'] = true;
            echo "OK";
        } else {
            $_SESSION['loggedin'] = false;
            echo "Your password is incorrect!";
        }
    } else {
        $_SESSION['loggedin'] = false;
        echo "Your username is incorrect!";
    }
}
?>