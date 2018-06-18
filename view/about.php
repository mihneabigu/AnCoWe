
<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">
    <script src="/js/script.js"></script>
    <?php
        $currentPage = "about";
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
    <h2 style="color:brown">If you can dream it, you can be it. Be a hero!</h2><hr color=black>
    <img src="<?php echo $jsonArray['data']['results'][0]['thumbnail']['path'] . "." . $jsonArray['data']['results'][0]['thumbnail']['extension']; ?>"
    style="max-width: 35%; margin-left: 33%; border-radius: 30%">
    <h3 style="color:brown"><strong>Character:</strong></h3>
    <p>Spiderman (Peter Parker)</p>
    <h3 style="color:brown"><strong>Character lore:</strong></h3>
    <p><?php echo $jsonArray['data']['results'][0]['description']; ?> <br><br></p>

    <video width="720" controls autoplay>
        <source src="video/spuder.mp4" type="video/mp4">
        <source src="video/spuder.ogg" type="video/ogg">
        Your browser does not support HTML5 video.
    </video>

    <h3 style="color:brown">Our team:</h3><hr color=black>

    <a href="https://github.com/mihneabigu">
        <img class="rounded" src="img/mihnea.png">
    </a>
    <a href="https://github.com/NinjaSaph">
        <img class="rounded" src="img/andra.png">
    </a>
    <a href="https://github.com/XKoutax">
        <img class="rounded" src="img/andrei.png">
    </a>
    <a href="https://github.com/guraliucalex">
        <img class="rounded" src="img/alex.png">
    </a>
</div>




<footer class="footer">
    <a href="https://github.com/mihneabigu/AnCoWe">
        <h5 style="text-align:center"><img src="/img/git.png" style="margin-top:-10px;margin-bottom:-10px;max-width:3%;max-height:3%"></h5>
    </a>
</footer>
</body>
</html>