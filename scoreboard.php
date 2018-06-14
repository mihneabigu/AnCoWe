<!DOCTYPE html>
<html>

<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">

    <?php
        include ("config.php");
        session_start();
        $userScore = 0;
        if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
            $stmt = $conn->prepare("select g.score from game_state g join users u on g.id_user=u.id where username=?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($result->num_rows == 1){
                $userScore = mysqli_fetch_assoc($result)['score'];
            }
        }
        $stmt = $conn->prepare("select g.score, u.username  from game_state g join users u on g.id_user=u.id order by 1 DESC");
        $stmt->execute();
        $result = $stmt->get_result();
        $array = array();
        $index = 0;
        while ($row = mysqli_fetch_assoc($result)){
            $array[$index] = $row;
            $index++;
        }
    ?>

    <ul>
        <li><a href="index.php">Home</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li><a href="Game/game.php" target="_blank">Play</a></li>
        <?php }; ?>
        <li><a href="#">How-To</a></li>
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
    <table class="scoreboard" style="font-size: 20px; font-family: Hack, monospace">
        <tr>
            <th>Username</th>
            <th>Score</th>
        </tr>
        <?php
            for ($i=0; $i < $index; $i++){
                echo "<tr>";
                echo "<td>".$array[$i]['username']."</td>";
                echo "<td>".$array[$i]['score']."</td>";
                echo "</tr>";
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