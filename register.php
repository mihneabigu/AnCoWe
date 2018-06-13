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

    <ul>
        <li><a class="active" href="index.php">Home</a></li>
        <li><a href="play.php">Play</a></li>
        <li><a href="#">How-To</a></li>
        <li><a href="#">Scoreboard</a></li>
        <li><a href="about.php">About</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li style="float:right"><a href="?logout">Logout</a></li>
        <?php } else { ?>
            <li style="float: right"><a href="register.php">Register</a></li>
            <li style="float:right"><a href="login.php">Login</a></li>
        <?php }; ?>
    </ul>

</head>

<body background="img/bg.jpg">

<?php
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
        header("location: login.php");
    }
}
?>

<div class="row">
<div  class="column" style = "width:300px; border: solid 1px #333333; background-color:bisque" align = "left">
    <div style = "background-color:#333333; color:#FFFFFF; padding:3px;"><b>Register</b></div>

    <div style = "margin:30px">

        <form action = "" method = "post">
            <label>UserName  :</label><input type = "text" name = "username" class = "box"/><br /><br />
            <label>E-Mail  :</label><br><input type="text" name = "email" class = "box" /><br/><br />
            <label>Password  :</label><input type = "password" name = "password" class = "box" /><br/><br />
            <input type = "submit" value = " Submit "/><br />
        </form>

        <br> If you want to go back to the login page, click <a href="login.php">here</a>

        <div style = "font-size:11px; color:#cc0000; margin-top:10px"><?php echo $error; ?></div>

    </div>
</div>
</div>


</body>
</html>