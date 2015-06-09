<?php
include 'functions.php';
include 'logout.php';

session_start();
if(isset($_POST["login"]))
{
    $idses = $_POST["email"];
    $pass = $_POST["pass"];
    if(verificar_login($idses, $pass))
    {      
        header("Location: ".$_SESSION["url_s"]);
    }
    else
    {
        echo 'El usuario introducido no existe';
    }
}
else if(isset($_GET["action"]) and $_GET["action"] == "logout")
{
    logout();
    header('location: ../../registroUsuario.html');
    //header("Location: ../../registroUsuario.html");
}