<?php

include 'functions.php';
//include 'principalUsuario.php';
//include 'logout.php';
//if (!isset($_SESSION["userId"])) {

if (verificar_login($_GET["email"], $_GET["pass"],$_GET["tipo"])) {

    $idUsuario = $_SESSION["userId"];
} else {
    $idUsuario = "False";
}


$json_string = json_encode($idUsuario);
echo $json_string;
//}


