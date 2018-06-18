<?php


// include_once("model/Book.php");

class Model {

    public function getMarvelDesc(){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $_SERVER['SERVER_NAME']."/api/marvel.php");
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

    public function getRules(){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $_SERVER['SERVER_NAME']."/api/rules.php");
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

    public function getScoreboard(){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $_SERVER['SERVER_NAME']."/api/scoreboard.php");
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

    public function login($username, $password){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $_SERVER['SERVER_NAME']."/api/login.php");
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, 'username='.$username.'&password='.$password);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }

    public function register($username, $email, $password){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $_SERVER['SERVER_NAME']."/api/register.php");
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, 'username='.$username.'&email='.$email.'&password='.$password);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
    }
}

?>