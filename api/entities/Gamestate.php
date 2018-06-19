<?php
include_once ("User.php");
class Gamestate {

    public $score;
    public $checkX;
    public $checkY;
    public $spell1;
    public $spell2;
    public $spell3;
    public $spell4;
    public $spell5;
    public $level;
    public $user;

    private $connection;

    public function __construct($connection){
        $this->connection = $connection;
        $this->user = new User($this->connection);
    }

    public function readCheckpoint(){
        $stmt = $this->connection->prepare("select checkpointX, checkpointY, spell1, spell2, spell3, spell4, spell5, level from game_state where id_user=(select id from users where username=?)");
        $stmt->bind_param("s",$this->user->username);
        $stmt->execute();
        $result = $stmt->get_result();
        $resArray = mysqli_fetch_assoc($result);
        return json_encode($resArray);
    }

    public function writeScore(){
        $stmt = $this->connection->prepare("select score from game_state where id_user=(select id from users where username=?)");
        $stmt->bind_param("s",$this->user->username);
        $stmt->execute();
        $result = $stmt->get_result();
        $scor = mysqli_fetch_assoc($result)['score'];
        if ($this->score > $scor){
            $stmt = $this->connection->prepare("update game_state set score=? where id_user=(select id from users where username=?)");
            $stmt->bind_param("is",$this->score,$this->user->username);
            $stmt->execute();
        }
    }

    public function writeCheckpoint(){
        $stmt = $this->connection->prepare("update game_state set checkpointX=?, checkpointY=?, spell1=?, spell2=?, spell3=?, spell4=?, spell5=?, level=? where id_user=(select id from users where username=?)");
        $stmt->bind_param("iiiiiiiis",$this->checkX,$this->checkY, $this->spell1, $this->spell2, $this->spell3, $this->spell4, $this->spell5, $this->level, $this->user->username);
        $stmt->execute();
    }
}

?>