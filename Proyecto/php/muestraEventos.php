<?php

include ("conexion.php");
$conexion = conectar();

$sql = "SELECT foto,nombre,descripCorta,idEvento FROM eventos ORDER BY idEvento desc LIMIT 3";
$resultados = mysqli_query($conexion, $sql);

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){

    $foto = $dato['foto'];
    $nombre = $dato['nombre'];
    $descripCorta = $dato['descripCorta'];    
    $idEvento = $dato['idEvento'];
    
    $evento[] = array('foto' => utf8_encode($foto), 'nombre' => utf8_encode($nombre), 'descripCorta' => utf8_encode($descripCorta), 'idEvento' => utf8_encode($idEvento));    
}

desconectar($conexion);

$json_string = json_encode($evento);
echo $json_string;

?>