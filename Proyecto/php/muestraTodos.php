<?php

include ("conexion.php");
$conexion = conectar();

//$elemento = 'nombre#desc';
$elemento = $_GET['elemento'];

list($campo, $tipo) = explode('#', $elemento);


    $orderBy = "ORDER BY $campo $tipo";


$sql = "SELECT nombre,precioNormal,precioReducido,fechaCaducidad,idEvento FROM eventos $orderBy";
$resultados = mysqli_query($conexion, $sql);

//echo $sql;

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){

    $nombre = $dato['nombre'];
    $precioNormal = $dato['precioNormal'];
    $precioReducido = $dato['precioReducido'];
    $fechaCaducidad = $dato['fechaCaducidad'];
    $idEvento = $dato['idEvento'];
    
    $evento[] = array('nombre' => utf8_encode($nombre), 'precioNormal' => $precioNormal, 'precioReducido' => $precioReducido,
                      'fechaCaducidad' => $fechaCaducidad, 'idEvento' => $idEvento);    
}

desconectar($conexion);

$json_string = json_encode($evento);
echo $json_string;

?>