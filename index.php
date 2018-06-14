<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">

    <?php session_start();
        $var = "sdfsdf"?>

    <ul>
        <li><a class="active" href="index.php">Home</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
        <li><a href="Game/game.php" target="_blank">Play</a></li>
        <?php }; ?>
        <li><a href="howto.php">How-To</a></li>
        <li><a href="scoreboard.php">Scoreboard</a></li>
        <li><a href="about.php">About</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li style="float:right"><a href="?logout">Logout</a></li>
        <?php } else { ?>
            <li style="float:right"><a href="register.php">Register</a></li>
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

<body background="img/bg.jpg">

<?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
    <div class="welcome" align=right>Welcome, <strong><?php echo $_SESSION['login_user']?></strong></div><br>
<?php }; ?>

<div class="wrapper">



    <div id="test" style="display: none"><?php echo $var; ?></div>

    <!-- <a href="#" onclick="callPHP('message=Salut')">call PHP script</a> -->

<!--    <script>-->
<!--        var x = document.getElementById("test");-->
<!--        window.alert(x.textContent);-->
<!--    </script>-->

    <h1 style="font-size: 50px;">WELCOME, ADVENTURER! <img src="img/spiderChibi.png" style="float: right; max-width: 20%; margin-top: -10%"></h1>

  <p style="font-size: 18px;">Hello, fellow traveller! <br><br> Greetings to the adventure of your lifetime. Together, we will travel in the realm of Dreams, where you will encounter strong opponents
      that you have to defeat, in order to achieve the end-game. <br><br>
      We hope that you will enjoy this experience and we look forward to see you on the battlefield!

</p>
</div>


<footer class="footer">
    <a href="https://github.com/mihneabigu/AnCoWe">
        <h5 style="text-align:center"><img src="/img/git.png" style="margin-top:-10px;margin-bottom:-10px;max-width:3%;max-height:3%"></h5>
    </a>
</footer>
</body>
</html>