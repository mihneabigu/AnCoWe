<?php

class User {

    private $connection;
    public $id;
    public $username;
    public $email;
    public $password;

    public function __construct($connection) {
        $this->connection = $connection;
    }

    public function create(){
        $stmt = $this->connection->prepare("select username from users where username=? or email=?");
        $stmt->bind_param("ss", $this->username, $this->email);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0){
            return json_encode(array("message" => "Your Username or Email already exist"));
        } else {
            $this->password = password_hash($this->password, PASSWORD_DEFAULT);
            $stmt = $this->connection->prepare("insert into users (username, email, password) values (?, ?, ?)");
            $stmt->bind_param("sss",$this->username, $this->email, $this->password);
            $stmt->execute();
            $stmt = $this->connection->prepare("select max(id) from users");
            $stmt->execute();
            $result = $stmt->get_result();
            $nothing=0;
            $id = mysqli_fetch_assoc($result)['max(id)'];
            $stmt = $this->connection->prepare("insert into game_state(id_user, score) values (?,?)");
            $stmt->bind_param("ii",$id,$nothing);
            $stmt->execute();
            return json_encode(array("message" => "OK"));
        }
    }

    public function read(){
        $stmt = $this->connection->prepare("select username, email from users");
        $stmt->execute();
        $result = $stmt->get_result();
        return json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));
    }

    public function readOne(){
        $stmt = $this->connection->prepare("select username, email from users where id=?");
        $stmt->bind_param("i", $this->id);
        $stmt->execute();
        $result = $stmt->get_result();
        return json_encode(mysqli_fetch_assoc($result));
    }

    public function login(){
        $stmt = $this->connection->prepare("select password from users where username=?");

        $stmt->bind_param("s", $this->username);
        $stmt->execute();

        $result = $stmt->get_result();
        if ($result->num_rows == 1){
            $result = mysqli_fetch_assoc($result);
            if (password_verify($this->password, $result['password'])){
                return json_encode(array("message" => "OK"));
            } else {
                return json_encode(array("message" => "Your password is incorrect!"));
            }
        } else {
            return json_encode(array("message" => "Your username is incorrect!"));
        }
    }
}
?>