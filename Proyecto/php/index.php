<?php

include 'functions.php';
//include 'principalUsuario.php';
//include 'logout.php';
//if (!isset($_SESSION["userId"])) {

if (verificar_login($_GET["email"], $_GET["pass"],$_GET["tipo"])) {

    $idUsuario = $_SESSION["userId"];
    $nombre = $_SESSION["userName"];
    
    $datosUsuario = $idUsuario."#".$nombre;
} else {
    $datosUsuario = "False";
}


$json_string = json_encode($datosUsuario);
echo $json_string;
//}


