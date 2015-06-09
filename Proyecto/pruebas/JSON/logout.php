<?php
unset($_SESSION["idUsuario"]);
unset($_SESSION["Nombre"]);
session_write_close();
header('location: ../../registroUsuario.html');