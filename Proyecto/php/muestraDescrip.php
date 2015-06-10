<?php

include ("conexion.php");
$conexion = conectar();

$idEvento = $_GET['idEvento'];
$sql = "SELECT nombre,descripcion,precioNormal,precioReducido,foto FROM eventos where idEvento = $idEvento";
$resultados = mysqli_query($conexion, $sql);

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){
    
    $nombre = $dato['nombre'];
    $descripcion = $dato['descripcion'];    
    $precioNormal = $dato['precioNormal'];
    $precioReducido = $dato['precioReducido'];
    $foto = $dato['foto'];

    $evento[] = array('nombre' => $nombre, 'descripcion' => $descripcion, 'precioNormal' => $precioNormal, 'precioReducido' => $precioReducido,'foto' => $foto);
}

desconectar($conexion);
  
$json_string = json_encode($evento);
echo $json_string;

?>