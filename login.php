<!DOCTYPE html>
<html>
<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">
    <?php
    include ("config.php");
    session_start();
    $error = "";
    ?>

    <ul>
        <li><a class="active" href="index.php">Home</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li><a href="Game/game.php" target="_blank">Play</a></li>
        <?php }; ?>
        <li><a href="#">How-To</a></li>
        <li><a href="scoreboard.php">Scoreboard</a></li>
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

<div class="loginRegisterBox">
        <div style = "background-color:#333333; color:#FFFFFF; padding:3px; text-align: center"><b>Login</b></div>

        <div style = "margin:30px">

            <form action = "" method = "post">
                <label>UserName  : </label><input type = "text" name = "username" class = "box"/><br /><br />
                <label>Password  : </label><input type = "password" name = "password" class = "box" /><br/><br />
                <input type = "submit" value = " Submit " style="font-size: 20px"/><br>
            </form>

            <div style = " color:#cc0000; margin-top:10px"><?php echo $error; ?></div>


    </div>
</div>

</body>
</html>