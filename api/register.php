<?php
include ('config.php');
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $stmt = $conn->prepare("select username from users where username=? or email=?");
    $stmt->bind_param("ss", $username, $email);
    $username = $_POST['username'];
    $email = $_POST['email'];
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0){
        echo "Username or Email already in use";
    } else {
        $password = $_POST['password'];
        $password = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("insert into users (username, email, password) values (?, ?, ?)");
        $stmt->bind_param("sss",$username, $email, $password);
        $stmt->execute();
        $stmt = $conn->prepare("select max(id) from users");
        $stmt->execute();
        $result = $stmt->get_result();
        $nothing=0;
        $id = mysqli_fetch_assoc($result)['max(id)'];
        $stmt = $conn->prepare("insert into game_state(id_user, score) values (?,?)");
        $stmt->bind_param("ii",$id,$nothing);
        $stmt->execute();
        echo "OK";
    }
}
?>