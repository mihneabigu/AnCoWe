<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="/css/style.css">
        <script src="/js/script.js"></script>
        <?php session_start(); $_SESSION['loggedin'] = false;?>
    </head>


    <body background="img/4228-texture.jpg">
        <header>
                <div class="Banner">
                    <img src="img/banner.jpg">
                  
                </div>
                <nav class="ButtonList">
                        <ul>
                            <li><button class="Active"><a href="home.php">HOME</a></button> |</li>
                            <li><button><a href="play.php">PLAY</a></button> |</li>
                            <li><button><a href="howto.php">HOW-TO</a></button> |</li>
                            <li><button><a href="scoreboard.php">SCOREBOARD</a></button> |</li>
                            <li><button><a href="about.php">ABOUT</a></button>   
                            </div>
                        </ul>
                </nav>
        </header>


    <?php if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        echo 'you logged in';
        } 
        else { ?>

        <div  id="LoginDiv" class="column" style = "width:300px; border: solid 2px Black; background-color:white " align = "left">
            <div style = "background-color:Gray; color:#FFFFFF; padding:3px;"><b>Login</b>
            </div>
    
            <div style = "margin:30px">
    
                <form action = "" method = "post" action="login.php">
                    <label>UserName  :</label><input type = "text" name = "username" class = "box"/><br /><br />
                    <label>Password  :</label><input type = "password" name = "password" class = "box" /><br/><br />
                    <input type = "submit" value = " Submit "/><br />
                </form>
    
                <br> Don't have an account? <a href="#" onclick="replace('LoginDiv','RegisterDiv')">Register.</a>
    
                <div style = "font-size:11px; color:#cc0000; margin-top:10px">
                </div>
            </div>
        </div>

        <div  id="RegisterDiv" class="column" style = "width:300px; border: solid 2px Black; background-color:white; display: none;" align = "left">
            <div style = "background-color:Gray; color:#FFFFFF; padding:3px;"><b>Register</b>
            </div>
    
            <div style = "margin:30px">
    
            <form action = "" method = "post" action="register.php">
                <label>UserName  :</label><input type = "text" name = "username" class = "box"/><br /><br />
                <label>E-Mail  :</label><br><input type="text" name = "email" class = "box" /><br/><br />
                <label>Password  :</label><input type = "password" name = "password" class = "box" /><br/><br />
                <input type = "submit" value = " Submit "/><br />
            </form>
    
                <br> Already have an account? <a href="#" onclick="replace('RegisterDiv','LoginDiv')">Login.</a>
    
                <div style = "font-size:11px; color:#cc0000; margin-top:10px">
                </div>
            </div>
        </div>

        <?php ; }; ?>


        <div class="wrapper">
            <div class="content">


            </div>
        </div>


    </body>


</html>
