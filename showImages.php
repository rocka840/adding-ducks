<?php

if(isset($_GET["count"])){
    $count = $_GET["count"];
    for($i = 0; $i < $count; $i++){
        echo "<img src='duck.jpg' alt='Duck'>";
    }
}

?>