<!DOCTYPE html>
<html>
<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <?php
    include ("config.php");
    session_start();
    $error = "";
    ?>
</head>

<body background="img/bg.jpg">

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $stmt = $conn->prepare("select username from users where username=? and password=?");
        $stmt->bind_param("ss", $username, $password);
        $username = $_POST['username'];
        $password = $_POST['password'];
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows == 1){
            $_SESSION['login_user'] = $username;
            $_SESSION['loggedin'] = true;
            header("location: index.php");
        } else {
            $error = "Your Login Name or Password is invalid";
            $_SESSION['loggedin'] = false;
        }
    }
?>

<div class="row">
    <div  class="column" style = "width:300px; border: solid 1px #333333; background-color:bisque" align = "left">
        <div style = "background-color:#333333; color:#FFFFFF; padding:3px;"><b>Login</b></div>

        <div style = "margin:30px">

            <form action = "" method = "post">
                <label>UserName  :</label><input type = "text" name = "username" class = "box"/><br /><br />
                <label>Password  :</label><input type = "password" name = "password" class = "box" /><br/><br />
                <input type = "submit" value = " Submit "/><br />
            </form>

            <br> If you want to register, click <a href="register.php">here</a>

            <div style = "font-size:11px; color:#cc0000; margin-top:10px"><?php echo $error; ?></div>

        </div>
    </div>
</div>

</body>
</html>