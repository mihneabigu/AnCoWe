<?php

class Database {
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "web_project";

    public $connection;

    public function getConnection(){
        $this->connection = null;
        $this->connection = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        return $this->connection;
    }
}

?>