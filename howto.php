<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">

    <?php session_start(); ?>

    <ul>
        <li><a href="index.php">Home</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li><a href="Game/game.php" target="_blank">Play</a></li>
        <?php }; ?>
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

    <h1>"No one can win every battle, but no man should fail without a struggle!" - Peter Parker</h1>
    <img src="img/howToSpuder.gif" style="float: right; max-width: 20%; margin-top: -8%">
    <h2 style="color:brown">GAMEPLAY</h2><hr color=black>
    <p>
    <strong style="font-size: 18px;">&#9830;Levels:</strong><br>
        <div id="levels"></div>
    <br><strong style="font-size: 18px;">&#9830;Dificulty:</strong><br>
        <div id="diff"></div>
    <br><strong style="font-size: 18px;">&#9830;Skills:</strong><br>
        <div id="skills"></div>
    <br><strong style="font-size: 18px;">&#9830;Checkpoints:</strong><br>
        <div id="check"></div>
    <br><strong style="font-size: 18px;">&#9830;Lives:</strong><br>
        <div id="lives"></div>
    <br><strong style="font-size: 18px;">&#9830;Goals:</strong><br>
        <div id="goals"></div>

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

<script>
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("levels").innerHTML = obj.levels;
            document.getElementById("diff").innerHTML = obj.difficulty;
            document.getElementById("skills").innerHTML = obj.skills;
            document.getElementById("check").innerHTML = obj.checkpoints;
            document.getElementById("lives").innerHTML = obj.lives;
            document.getElementById("goals").innerHTML = obj.goals;
        }
    };
    xmlhttp.open("GET", "api/rules.php", true);
    xmlhttp.send();
</script>

</body>
</html>