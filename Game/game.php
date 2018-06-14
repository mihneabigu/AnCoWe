<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/img/favicon.ico" type="image/ico">

    <ul>
        <li><a href="/index.php">Home</a></li>
        <li><a class="active" href="game.php">Play</a></li>
        <li><a href="/howto.php">How-To</a></li>
        <li><a href="/scoreboard.php">Scoreboard</a></li>
        <li><a href="/about.php">About</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li style="float:right"><a href="/?logout">Logout</a></li>
        <?php } else { ?>
            <li style="float:right"><a href="/register.php">Register</a></li>
            <li style="float:right"><a href="/login.php">Login</a></li>
        <?php }; ?>
    </ul>
    <script data-main="js/app" src="js/libs/require.js"></script>
    
    <?php if(isset($_GET['logout'])) {
        session_unset();
        session_destroy();
        header("location:index.php");
        exit();
    }; ?>
</head>

<body background="/img/bg.jpg">

<?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
    <div class="welcome" align=right>Welcome, <strong><?php echo $_SESSION['login_user']?></strong></div><br>
<?php }; ?>

<div class="wrapper" style="margin-bottom:120px; width: fit-content">
    <canvas id='canvas' width=800 height=700 style="margin-left:-20px;border-radius:10%"></canvas>
</div>


<footer class="footer">
    <a href="https://github.com/mihneabigu/AnCoWe">
        <h5 style="text-align:center"><img src="/img/git.png" style="margin-top:-10px;margin-bottom:-10px;max-width:3%;max-height:3%"></h5>
    </a>
</footer>
</body>
</html>