<?php
session_start();
include_once("model/Model.php");

class Controller {
    public $model;

    public function __construct()
    {
        $this->model = new Model();

    }

    public function invoke()
    {
        if (!isset($_GET['action'])) {
            // no special book is requested, we'll show a list of all available books
            include 'view/index.php';
        }
        else if(isset($_GET['action']) && !empty($_GET['action'])) {
            if ($_GET['action'] == "game"){
                include 'view/Game/game.php';
            }
            if ($_GET['action'] == "about"){
                $jsonArray = json_decode($this->model->getMarvelDesc(), true);
                include 'view/about.php';
            }
            if ($_GET['action'] == "howto"){
                $jsonArray = json_decode($this->model->getRules(), true);
                include 'view/howto.php';
            }
            if ($_GET['action'] == "login"){
                $response = "";
                if (isset($_POST['username']) && isset($_POST['password']) && !empty($_POST['username']) && !empty($_POST['password'])){
                    $response = $this->model->login($_POST['username'], $_POST['password']);
                    if ($response == "OK"){
                        $_SESSION['login_user'] = $_POST['username'];
                        $_SESSION['loggedin'] = true;
                        header('location: home');
                    } else {
                        $_SESSION['loggedin'] = false;
                        include 'view/login.php';
                    }
                    unset($_POST['username']);
                    unset($_POST['password']);
                } else {
                    $_SESSION['loggedin'] = false;
                    include 'view/login.php';
                }
            }
            if ($_GET['action'] == "register"){
                $response = "";
                if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && !empty($_POST['username']) && !empty($_POST['password']) && !empty($_POST['email'])){
                    $response = $this->model->register($_POST['username'], $_POST['email'], $_POST['password']);
                    if ($response == "OK"){
                        header('location: login');
                    } else {
                        include 'view/register.php';
                    }
                } else {
                    include 'view/register.php';
                }
            }
            if ($_GET['action'] == "scoreboard"){
                $jsonArray = json_decode($this->model->getScoreboard(), true);
                include 'view/scoreboard.php';
            }
        }
    }
}

?>