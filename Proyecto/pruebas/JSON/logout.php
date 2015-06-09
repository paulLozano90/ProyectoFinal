<?php
unset($_SESSION["idUsuario"]);
unset($_SESSION["Nombre"]);
session_destroy();
header('location: ../../registroUsuario.html');