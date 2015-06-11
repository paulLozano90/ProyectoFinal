<?php

function controlUserName() {

    $idUsuario = $_GET["idUsuario"];
    $sql = "SELECT nombre FROM usuarios where idUsuario = $idUsuario";
    $resultados = mysqli_query($conexion, $sql);

    $user = array();

    while ($usuarios = mysqli_fetch_array($resultados)) {
        $nombre = $usuarios['nombre'];
        $user[] = array("nombre" => utf8_encode($nombre));
    }

    desconectar($conexion);

    $json_string = json_encode($user);
    print $json_string;
}

//Te he modificado esto para hacer una prueba 
//usando cookies en el usuario...

include ("conexion.php");
$conexion = conectar();

$idUsuario = $_GET["idUsuario"];
$sql = "SELECT nombre FROM usuarios where idUsuario = $idUsuario";
$resultados = mysqli_query($conexion, $sql);

$user = array();

while ($usuarios = mysqli_fetch_array($resultados)) {
    $nombre = $usuarios['nombre'];
    $user[] = array("nombre" => utf8_encode($nombre));
}

desconectar($conexion);

$json_string = json_encode($user);
print $json_string;
//?>
