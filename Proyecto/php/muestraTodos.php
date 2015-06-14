<?php

include ("conexion.php");
$conexion = conectar();

//$elemento = 'ev.nombre#desc';
$elemento = $_GET['elemento'];

list($campo, $tipo) = explode('#', $elemento);

$orderBy = "ORDER BY $campo $tipo";

$sql = "SELECT ev.nombre as nombreEvento,precioReducido,fechaCaducidad,idEvento,te.nombre as tipoEvento "
     . "FROM eventos ev "
     . "LEFT JOIN tipoEvento te "
     . "ON te.idTipo = ev.idTipo "
     . "$orderBy";

$resultados = mysqli_query($conexion, $sql);

//echo $sql;

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){

    $nombreEvento = $dato['nombreEvento'];
    $precioEvento = $dato['precioReducido'];
    $fechaCaducidad = $dato['fechaCaducidad'];
    $idEvento = $dato['idEvento'];
    $tipoEvento = $dato['tipoEvento'];
    
    $evento[] = array('nombreEvento' => utf8_encode($nombreEvento), 'precioEvento' => $precioEvento, 
                      'fechaCaducidad' => utf8_encode($fechaCaducidad), 'idEvento' => $idEvento,
                      'tipoEvento' => utf8_encode($tipoEvento));    
}

desconectar($conexion);

$json_string = json_encode($evento);
echo $json_string;

?>