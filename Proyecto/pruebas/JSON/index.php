<?php
include 'functions.php';

if(isset($_POST["login"]))
{
    $idses = $_POST["email"];
    $pass = $_POST["pass"];

    if(verificar_login($idses, $pass, $result))
    {
        session_start();       
        list($idtry, $emailtry) = spliti("@", $idses);
        $_SESSION["idUser"] = "id";
        $_SESSION["idUserValue"] = $idtry;
        
        header("Location: ../../principalUsuario.html?".$_SESSION["idUser"]."=".$_SESSION["idUserValue"]);
    }
    else
    {
        echo 'El usuario introducido no existe';
    }
}
else
{
    print "pulse login";
}