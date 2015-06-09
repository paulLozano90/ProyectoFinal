<?php
unset($_SESSION["idUsuario"]);
unset($_SESSION["Nombre"]);
session_
session_destroy() = true;
header('location: ../../registroUsuario.html');