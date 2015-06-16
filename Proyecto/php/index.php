<?php

include 'functions.php';
//include 'principalUsuario.php';
include 'logout.php';

if(!isset($_SESSION["userId"]))
{
    if(isset($_POST["login"]))
    {
        if(verificar_login($_POST["email"], $_POST["pass"]))
        {          
            header("location: ../html/principalUsuario.html?idUsuario=".$_SESSION["userId"]);
        }
        else
        {
            header("location: ../html/registroUsuario.html");
        }
    }
}


