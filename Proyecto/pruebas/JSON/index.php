<?php

include 'functions.php';
include '../../php/principalUsuario.php';
include 'logout.php';
include 'conexion.php';
$conexion = conectar();

session_start();
if (!isset($_SESSION["userId"])){
    if (isset($_POST["login"])){
        $idses = $_POST["email"];
        $pass = $_POST["pass"];
        if (verificar_login($idses, $pass)) {
            header("Location: " . $_SESSION["url_s"]);
            controlUserName();
        } else {
            echo 'El usuario introducido no existe';
        }
    } else if (isset($_GET["action"]) and $_GET["action"] == "logout") {
        logout();
        header('location: ../../inicioWeb.html');
        //header("Location: ../../registroUsuario.html");
    }
}
else{
    unset($_SESSION["userId"]);
    echo 'La variable '.$_SESSION["userId"];
}
