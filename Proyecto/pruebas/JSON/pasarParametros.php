<?php

include ("conexion.php");
$conexion = conectar();

$idEvento = $_GET['id'];
$sql = "SELECT id_empresa,idTipo,nombre FROM eventos where id_evento = $idEvento";
$resultados = mysqli_query($conexion, $sql);

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){
    
    $id_empresa = $dato['id_empresa'];
    $idTipo = $dato['idTipo'];
    $nombre = $dato['nombre'];

    $evento[] = array('id_empresa' => $id_empresa, 'idTipo' => $idTipo, 'nombre' => $nombre);
}

desconectar($conexion);
  
$json_string = json_encode($evento);
echo $json_string;

?>