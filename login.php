<!DOCTYPE html>
<html>
<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
    <?php
    session_start();
    ?>

    <ul>
        <li><a class="active" href="index.php">Home</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li><a href="Game/game.php" target="_blank">Play</a></li>
        <?php }; ?>
        <li><a href="howto.php">How-To</a></li>
        <li><a href="scoreboard.php">Scoreboard</a></li>
        <li><a href="about.php">About</a></li>
        <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) { ?>
            <li style="float:right"><a href="?logout">Logout</a></li>
        <?php } else { ?>
            <li style="float: right"><a href="register.php">Register</a></li>
            <li style="float:right"><a href="login.php">Login</a></li>
        <?php }; ?>
    </ul>

</head>

<body background="img/bg.jpg">


<div class="loginRegisterBox">
        <div style = "background-color:#333333; color:#FFFFFF; padding:3px; text-align: center"><b>Login</b></div>

        <div style = "margin:30px">

            <form id="submit" action = "api/login.php" method = "post">
                <label>UserName  : </label><input type = "text" name = "username" class = "box"/><br /><br />
                <label>Password  : </label><input type = "password" name = "password" class = "box" /><br/><br />
                <input type = "submit" value = " Submit " style="font-size: 20px"/><br>
            </form>

            <div id="response" style = " color:#cc0000; margin-top:10px"></div>

    </div>
</div>

<script>
    $('#submit').submit(function() { // catch the form's submit event
        $.ajax({ // create an AJAX call...
            data: $(this).serialize(), // get the form data
            type: $(this).attr('method'), // GET or POST
            url: $(this).attr('action'), // the file to call
            success: function(response) { // on success..
                if (response == "OK"){
                    document.location.href = 'index.php';
                } else {
                    $('#response').html(response);
                }// update the DIV
            }
        });
        return false; // cancel original event to prevent form submitting
    });
</script>

</body>
</html>