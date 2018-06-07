<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <script src="https://code.createjs.com/soundjs-0.6.2.min.js"></script>
    <script src="https://code.createjs.com/easeljs-0.8.2.min.js"></script>
    <script src="https://code.createjs.com/tweenjs-0.6.2.min.js"></script>
    <script src="https://code.createjs.com/preloadjs-0.6.2.min.js"></script>
    <script src="/js/script.js"></script>
    <script src="/js/game.js"></script>
    <?php session_start();?>

    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a class="active" href="play.php">Play</a></li>
        <li><a href="#">How-To</a></li>
        <li><a href="#">Scoreboard</a></li>
        <li><a href="about.php">About</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li style="float:right"><a href="#">Logout</a></li>
        <?php } else { ?>
            <li style="float:right"><a href="login.php">Login</a></li>
        <?php }; ?>
    </ul>
    
    <?php if(isset($_GET['logout'])) {
        session_unset();
        session_destroy();
        header("location:index.php");
        exit();
    }; ?>

</head>

<body onload = "init();" background="img/bg.jpg">

<?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
  <p align=right style="float:right; color:white">Welcome, <?php echo $_SESSION['login_user']?>~</p>
<?php }; ?>

<div class="wrapper" style="background:none; border:none;">
    <canvas tabindex='1' id="game" width="800" height="500" style="margin-left:-95px;border:5px solid #000000;"></canvas>
</div>

<div class="footer">
    <a href="https://github.com/mihneabigu/AnCoWe">
        <h5 style="text-align:center"><img src="/img/git.png" style="margin-top:-10px;margin-bottom:-10px;max-width:3%;max-height:3%"></h3>
    </a>
</div>
</body>
</html>