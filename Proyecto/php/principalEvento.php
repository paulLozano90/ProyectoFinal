<?php

include ("conexion.php");
$conexion = conectar();

//$idEvento = 6;
$idEvento = $_GET['idEvento'];
$sql = "SELECT ev.nombre as nombreEvento,ev.descripcion as descripEvento,fechaCaducidad,precioNormal,precioReducido,foto,"
     . "em.nombre as nombreEmpresa,em.telefono as telfEmpresa,em.direccion as dirEmpresa "
     . "FROM eventos ev "
     . "LEFT JOIN empresas em "
     . "ON em.idEmpresa = ev.idEmpresa "
     . "WHERE idEvento = $idEvento";

//echo $sql;
$resultados = mysqli_query($conexion, $sql);

if(!$resultados) die("Error al mostrar evento");

$evento = array();

while($dato = mysqli_fetch_array($resultados)){
    
    $nombre = $dato['nombreEvento'];
    $descripcion = $dato['descripEvento'];
    $fechaCaducidad = $dato['fechaCaducidad'];
    $precioNormal = $dato['precioNormal'];
    $precioReducido = $dato['precioReducido'];
    $foto = $dato['foto'];
    $empresa = $dato['nombreEmpresa'];
    $telefono = $dato['telfEmpresa'];
    $direccion = $dato['dirEmpresa'];    

    $evento[] = array('nombre' => utf8_encode($nombre), 'descripcion' => utf8_encode($descripcion), 'fechaCaducidad' => utf8_encode($fechaCaducidad), 
                      'precioNormal' => utf8_encode($precioNormal), 'precioReducido' => utf8_encode($precioReducido),'foto' => utf8_encode($foto), 
                      'empresa' => utf8_encode($empresa), 'telefono' => utf8_encode($telefono), 'direccion' => utf8_encode($direccion));
}

desconectar($conexion);
  
$json_string = json_encode($evento);
echo $json_string;

?>