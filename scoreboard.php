<?php
session_start();
?>

<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">

    <ul>
        <li><a href="index.php">Home</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li><a href="Game/game.php" target="_blank">Play</a></li>
        <?php }; ?>
        <li><a href="howto.php">How-To</a></li>
        <li><a class="active" href="scoreboard.php">Scoreboard</a></li>
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
    <img src="img/trofeu.png" style="margin-left: 38%; max-width: 20%">
    <table id="tableid" class="scoreboard" style="font-size: 20px; font-family: Hack, monospace">

    </table>
</div>


<footer class="footer">
    <a href="https://github.com/mihneabigu/AnCoWe">
        <h5 style="text-align:center"><img src="/img/git.png" style="margin-top:-10px;margin-bottom:-10px;max-width:3%;max-height:3%"></h5>
    </a>
</footer>

<script>
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        var json = JSON.parse(this.responseText);
        var table = document.getElementById("tableid");
        var header = ['Username', 'Score'];
        var tr = document.createElement('tr');
        for (var col in header) {
            var th = document.createElement('th');
            th.innerHTML = header[col];
            tr.appendChild(th);
        }
        table.appendChild(tr);

        for (var i = 0; i < json.length; i++){
            var tr = document.createElement('tr');
            var td_1 = document.createElement('td');
            var td_2 = document.createElement('td');
            td_1.innerHTML = json[i].username;
            td_2.innerHTML = json[i].score;
            tr.appendChild(td_1);
            tr.appendChild(td_2);
            table.appendChild(tr);
        }
    };
    request.open("GET", "api/scoreboard.php", false);
    request.send();
</script>

</body>
</html>