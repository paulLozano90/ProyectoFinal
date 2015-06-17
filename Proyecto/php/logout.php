<?php
session_start();

function logout(){
    unset( $_SESSION["userId"] );
    unset( $_SESSION["userNombre"]);
    session_destroy();
    
    header("location: ../inicioWeb.html");
    header("Expires: Thu, 19 Nov 1981 08:52:00 GMT");
    header("Cache-Control: no-store, no-cache, must-revalidate");
}

logout();


