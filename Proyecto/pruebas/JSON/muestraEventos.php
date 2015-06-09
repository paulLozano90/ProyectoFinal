<?php

include ("conexion.php");
$conexion = conectar();

$sql = "SELECT nombre,descripCorta,idEvento FROM eventos ORDER BY idEvento desc LIMIT 3";
$resultados = mysqli_query($conexion, $sql);

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){

    $nombre = $dato['nombre'];
    $descripCorta = $dato['descripCorta'];    
    $idEvento = $dato['idEvento'];
    
    $evento[] = array('nombre' => utf8_encode($nombre), 'descripCorta' => utf8_encode($descripCorta), 'idEvento' => utf8_encode($idEvento));    
}
<<<<<<< HEAD
print_r($evento);
=======

>>>>>>> 0320a20d44b641be5047023620338fae5dfc8572
desconectar($conexion);

$json_string = json_encode($evento);
echo $json_string;

?>