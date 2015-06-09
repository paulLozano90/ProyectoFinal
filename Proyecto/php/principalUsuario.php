<?php

include ("conexion.php");
$conexion = conectar();

$idUsuario = $_GET["idUsuario"];
$sql = "SELECT nombre FROM usuarios where idUsuario = $idUsuario";
$resultados = mysqli_query($conexion, $sql);

$usuario = $resultados->fetch_assoc();

desconectar($conexion);
  
$json_string = json_encode($usuario["nombre"]);

?>