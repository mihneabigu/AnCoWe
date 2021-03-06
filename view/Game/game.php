

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/img/favicon.ico" type="image/ico">

    <?php
        $currentPage = "play";
        include ("view/menu.php");
    ?>
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