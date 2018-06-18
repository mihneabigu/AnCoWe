<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">



    <?php
        $currentPage = "home";
        include ("view/menu.php");
    ?>

    <?php if(isset($_GET['logout'])) {
        session_unset();
        session_destroy();
        header("location: home");
        exit();
    }; ?>
</head>

<body background="img/bg.jpg">

<?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
    <div class="welcome" align=right>Welcome, <strong><?php echo $_SESSION['login_user']?></strong></div><br>
<?php }; ?>

<div class="wrapper">
    <div id="test" style="display: none"><?php echo $var; ?></div>
    <h1 style="font-size: 50px;">WELCOME, ADVENTURER! <img src="img/spiderChibi.png" style="float: right; max-width: 20%; margin-top: -10%"></h1>
    <p style="font-size: 18px;">Hello, fellow traveller! <br><br> Greetings to the adventure of your lifetime. Together, we will travel in the realm of Dreams, where you will encounter strong opponents
        that you have to defeat, in order to achieve the end-game. <br><br>
        We hope that you will enjoy this experience and we look forward to see you on the battlefield!
    </p>
</div>

<?php include ("view/footer.php"); ?>
</body>
</html>