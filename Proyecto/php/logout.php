<?php
session_start();

function logout(){
    unset( $_SESSION["userId"] );
    unset( $_SESSION["userNombre"]);
    session_destroy();
    
    header("location: ../inicioWeb.html");
}

logout();


