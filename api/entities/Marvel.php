<?php

class Marvel {

    private $connection;

    public function __construct($connection){
        $this->connection = $connection;
    }

    public function read(){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&name=spider-man&apikey=ea43e97f5f2bda77bc8d53326db7cf50&hash=" . md5("1b95f3d7a90d497ab7d575320abee530af2419b86ea43e97f5f2bda77bc8d53326db7cf50");
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.A.B.C Safari/525.13");
        $data = curl_exec($ch);
        curl_close($ch);

        return $data;
    }
}

?>