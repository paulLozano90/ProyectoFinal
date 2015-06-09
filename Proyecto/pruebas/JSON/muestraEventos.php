<?php

include ("conexion.php");
$conexion = conectar();

$sql = "SELECT nombre,descripCorta,idEvento FROM eventos ORDER BY idEvento LIMIT 3,3";
$resultados = mysqli_query($conexion, $sql);

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){

    $nombre = $dato['nombre'];
    $descripCorta = $dato['descripCorta'];    
    $idEvento = $dato['idEvento'];
    
    $evento[] = array('nombre' => $nombre, 'descripCorta' => $descripCorta, 'idEvento' => $idEvento);
}
print_r($evento);
desconectar($conexion);
  
$json_string = json_encode($evento);
echo $json_string;	

?>