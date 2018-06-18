<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">

    <?php
        $currentPage = "howto";
        include ("view/menu.php");

        ?>

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
        <div id="levels"><?php echo $jsonArray['levels']; ?></div>
    <br><strong style="font-size: 18px;">&#9830;Dificulty:</strong><br>
        <div id="diff"><?php echo $jsonArray['difficulty']; ?></div>
    <br><strong style="font-size: 18px;">&#9830;Skills:</strong><br>
        <div id="skills"><?php echo $jsonArray['skills']; ?></div>
    <br><strong style="font-size: 18px;">&#9830;Checkpoints:</strong><br>
        <div id="check"><?php echo $jsonArray['checkpoints']; ?></div>
    <br><strong style="font-size: 18px;">&#9830;Lives:</strong><br>
        <div id="lives"><?php echo $jsonArray['lives']; ?></div>
    <br><strong style="font-size: 18px;">&#9830;Goals:</strong><br>
        <div id="goals"><?php echo $jsonArray['goals']; ?></div>

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