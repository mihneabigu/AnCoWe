<?php

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
    echo "<ul>
        <li><a href=\"home\" class="; if($currentPage =='home'){echo 'active';} echo ">Home</a></li>
        <li><a href=\"game\" class="; if($currentPage =='play'){echo 'active';} echo ">Play</a></li>
        <li><a href=\"howto\" class="; if($currentPage =='howto'){echo 'active';} echo ">How-To</a></li>
        <li><a href=\"scoreboard\" class="; if($currentPage =='scoreboard'){echo 'active';} echo ">Scoreboard</a></li>
        <li><a href=\"about\" class="; if($currentPage =='about'){echo 'active';} echo ">About</a></li>
        <li style=\"float:right\"><a href=\"?logout\">Logout</a></li>
    </ul>";
} else {
    echo "<ul>
        <li><a href=\"home\" class="; if($currentPage =='home'){echo 'active';} echo ">Home</a></li>
        <li><a href=\"howto\" class="; if($currentPage =='howto'){echo 'active';} echo ">How-To</a></li>
        <li><a href=\"scoreboard\" class="; if($currentPage =='scoreboard'){echo 'active';} echo ">Scoreboard</a></li>
        <li><a href=\"about\" class="; if($currentPage =='about'){echo 'active';} echo ">About</a></li>
        <li style=\"float:right\"><a href=\"register\">Register</a></li>
        <li style=\"float:right\"><a href=\"login\">Login</a></li>
    </ul>";
}

?>