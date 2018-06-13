<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&name=spider-man&apikey=ea43e97f5f2bda77bc8d53326db7cf50&hash=" . md5("1b95f3d7a90d497ab7d575320abee530af2419b86ea43e97f5f2bda77bc8d53326db7cf50");
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.A.B.C Safari/525.13");
$data = curl_exec($ch);
curl_close($ch);


    $jsonArray = json_decode($data, true);

?>

<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">
    <script src="/js/script.js"></script>
    <?php session_start();?>

    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="play.php">Play</a></li>
        <li><a href="#">How-To</a></li>
        <li><a href="#">Scoreboard</a></li>
        <li><a class="active" href="about.php">About</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li style="float:right"><a href="?logout">Logout</a></li>
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

<body background="img/bg.jpg">

<?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
  <p align=right style="float:right; color:white">Welcome, <?php echo $_SESSION['login_user']?>~</p>
<?php }; ?>

<div class="wrapper">
    <img src="<?php echo $jsonArray['data']['results'][0]['thumbnail']['path'] . "." . $jsonArray['data']['results'][0]['thumbnail']['extension']; ?>" style="max-width: 35%; margin-left: 33%">
  <p>
      <?php echo $jsonArray['data']['results'][0]['description']; ?> <br><br>

</p>
</div>




<footer class="footer">
    <a href="https://github.com/mihneabigu/AnCoWe">
        <h5 style="text-align:center"><img src="/img/git.png" style="margin-top:-10px;margin-bottom:-10px;max-width:3%;max-height:3%"></h5>
    </a>
</footer>
</body>
</html>