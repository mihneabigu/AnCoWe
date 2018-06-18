<!DOCTYPE html>
<html>
<head>
    <title>zzz</title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="img/favicon.ico" type="image/ico">
    <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>

    <?php
        $currentPage = "login";
        include ("view/menu.php");
    ?>

</head>

<body background="img/bg.jpg">


<div class="loginRegisterBox">
        <div style = "background-color:#333333; color:#FFFFFF; padding:3px; text-align: center"><b>Login</b></div>

        <div style = "margin:30px">

            <form id="submit" action = "" method = "post">
                <label>UserName  : </label><input type = "text" name = "username" class = "box"/><br /><br />
                <label>Password  : </label><input type = "password" name = "password" class = "box" /><br/><br />
                <input type = "submit" value = " Submit " style="font-size: 20px"/><br>
            </form>

            <div id="response" style = " color:#cc0000; margin-top:10px">
                <?php
                    echo $response;
                ?>
            </div>

    </div>
</div>

</body>
</html>