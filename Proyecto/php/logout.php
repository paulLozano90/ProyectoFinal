<?php

function logout(){
    unset( $_SESSION["userId"] );
    unset( $_SESSION["userNombre"]);
    unset( $_SESSION["url_s"]);
    session_destroy();
}


