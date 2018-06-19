<?php

class Rules {

    private $connection;

    public function __construct($connection) {
        $this->connection = $connection;
    }

    public function read(){
        $stmt = $this->connection->prepare("select * from rules");
        $stmt->execute();
        $result = $stmt->get_result();
        $resArray = mysqli_fetch_assoc($result);
        return json_encode($resArray);
    }
}
?>