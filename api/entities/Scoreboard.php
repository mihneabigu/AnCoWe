<?php

class Scoreboard {

    private $connection;

    public function __construct($connection){
        $this->connection = $connection;
    }

    public function read(){
        $stmt = $this->connection->prepare("select g.score, u.username  from game_state g join users u on g.id_user=u.id order by 1 DESC");
        $stmt->execute();
        $result = $stmt->get_result();
        $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
        return json_encode($json);
    }
}

?>