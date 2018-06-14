<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">

    <?php session_start();
        $var = "sdfsdf"?>

    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="play.php">Play</a></li>
        <li><a class="active" href="howto.php">How-To</a></li>
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

<div class="wrapper" style="margin-bottom: 120px">



    <div id="test" style="display: none"><?php echo $var; ?></div>

    <!-- <a href="#" onclick="callPHP('message=Salut')">call PHP script</a> -->

<!--    <script>-->
<!--        var x = document.getElementById("test");-->
<!--        window.alert(x.textContent);-->
<!--    </script>-->

    <h1>"No one can win every battle, but no man should fail without a struggle!" - Peter Parker</h1>
    <img src="img/howToSpuder.gif" style="float: right; max-width: 20%; margin-top: -8%">
    <h2 style="color:brown">GAMEPLAY</h2><hr color=black>
    <p style="font-size: 18px;">
    <strong>&#9830;Levels:</strong><br>
        The game consists of 5 levels.(rooms) Brace yourselves! 
    <br><strong>&#9830;Dificulty:</strong><br>
        Monsters & and arrow lancers can bring you down but you are strong so you shouldn't let them!
        You may find some bosses. Choose your actions wisely.
    <br><strong>&#9830;Skills:</strong><br>
        Finishing the first two levels gets you new skills as rewards.
        You can pick up bosses skills by killing them. Each boss skill is special.
    <br><strong>&#9830;Checkpoints:</strong><br>
        Every new room is a new checkpoint. You spawn back at the last one whenever you die.
    <br><strong>&#9830;Lives:</strong><br>
        If you die, you spawn back at the last checkpoint.
        If you die 10 times, it's GAME OVER.
    <br><strong>&#9830;Goals:</strong><br>
        You have to pick up keys to escape the current room and reach the next level.
        You also want to kill as many monsters as possible in order to save the world and reach the best score!

    </p>
    <h2 style="color:brown">CONTROLS</h2>
    <p style="font-size: 18px;border-style:solid;border-width:1px;border-radius:25%;padding:5%;text-align:center">
        <strong>&#9830;Move:</strong><img src="img/move.png" style="width:10%">
        <strong>&#9830;Simple attack:</strong><img src="img/autoattack.png" style="width:5%">
        <br><strong>&#9830;Skills:</strong><img src="img/skills.png" style="width:25%">
        <strong>&#9830;Show stats:</strong><img src="img/stats.png" style="width:5%"><br>
    </p>
</div>


<footer class="footer">
    <a href="https://github.com/mihneabigu/AnCoWe">
        <h5 style="text-align:center"><img src="/img/git.png" style="margin-top:-10px;margin-bottom:-10px;max-width:3%;max-height:3%"></h5>
    </a>
</footer>
</body>
</html>