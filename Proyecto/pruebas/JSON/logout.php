<?php

function logout(){
    $_SESSION = array();
    unset( $_SESSION["userId"] );
    unset( $_SESSION["userNombre"]);
    unset( $_SESSION["url_s"]);
    session_write_close();
}


