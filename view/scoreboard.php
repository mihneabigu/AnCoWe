
<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">

    <?php
        $currentPage = "scoreboard";
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

<div class="wrapper">
    <img src="img/trofeu.png" style="margin-left: 38%; max-width: 20%">
    <table id="tableid" class="scoreboard" style="font-size: 20px; font-family: Hack, monospace">
        <tr>
            <th>Username</th>
            <th>Score</th>
        </tr>
        <?php
            for ($i = 0; $i<count($jsonArray); $i++){
                echo "<tr><td>".$jsonArray[$i]['username']."</td><td>".$jsonArray[$i]['score']."</td></tr>";
            }
        ?>
    </table>
</div>


<footer class="footer">
    <a href="https://github.com/mihneabigu/AnCoWe">
        <h5 style="text-align:center"><img src="/img/git.png" style="margin-top:-10px;margin-bottom:-10px;max-width:3%;max-height:3%"></h5>
    </a>
</footer>


</body>
</html>