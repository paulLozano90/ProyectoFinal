
<?php

include ("conexion.php");
$conexion = conectar();

//$idEmpresa = 1;
//$elemento = 'ev.nombre#desc';
$idEmpresa = $_GET["idEmpresa"];
$elemento = $_GET['elemento'];

list($campo, $tipo) = explode('#', $elemento);
$orderBy = "ORDER BY $campo $tipo";

$sql = "SELECT em.nombre as empresa, ev.nombre as evento,"
        . "precioNormal,precioReducido,fechaCreacion,fechaCaducidad,idEvento "
        . "FROM eventos ev "
        . "LEFT JOIN empresas em "
        . "ON em.idEmpresa = ev.idEmpresa "
        . "WHERE ev.idEmpresa = $idEmpresa "
        . "$orderBy";

$resultados = mysqli_query($conexion, $sql);

//echo $sql;

if (!$resultados)
    die("Error al mostrar evento de la empresa");

$evento = array();

while ($dato = mysqli_fetch_array($resultados)) {

    $empresa = $dato['empresa'];
    $nombreEvento = $dato['evento'];
    $precioNormal = $dato['precioNormal'];
    $precioReducido = $dato['precioReducido'];
    $fechaCreacion = $dato['fechaCreacion'];
    $fechaCaducidad = $dato['fechaCaducidad'];
    $idEvento = $dato['idEvento'];

    $evento[] = array('nombreEvento' => utf8_encode($nombreEvento), 'empresa' => utf8_encode($empresa),
                      'precioNormal' => $precioNormal, 'precioReducido' => $precioReducido,
                      'fechaCreacion' => utf8_encode($fechaCreacion), 'fechaCaducidad' => utf8_encode($fechaCaducidad),
                      'idEvento' => $idEvento);
}

desconectar($conexion);

$json_string = json_encode($evento);
echo $json_string;
?>
