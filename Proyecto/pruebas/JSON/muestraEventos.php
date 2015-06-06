<?php

include ("conexion.php");
$conexion = conectar();

$sql = "SELECT nombre,descripcion,idEvento FROM eventos ORDER BY idEvento desc LIMIT 3";
$resultados = mysqli_query($conexion, $sql);

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){

    $nombre = $dato['nombre'];
    $descripcion = $dato['descripcion'];    
    $idEvento = $dato['idEvento'];
    
    $evento[] = array('nombre' => $nombre, 'descripcion' => $descripcion, 'idEvento' => $idEvento);
}
	
desconectar($conexion);
  
$json_string = json_encode($evento);
echo $json_string;	

?>