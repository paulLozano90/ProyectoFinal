
<?php

include ("conexion.php");

//$idEmpresa = "";
//$idUsuario = 1;
//$idEmpresa = $_GET["idEmpresa"];
//$idUsuario = $_GET["idUsuario"];

if($_GET["idEmpresa"] !== ''){
    dimeNombreEmpresa($_GET["idEmpresa"]);
}
if($_GET["idUsuario"] !== ''){
    dimeNombreUsuario($_GET["idUsuario"]);
}

function dimeNombreEmpresa($idEmpresa) {

    $conexion = conectar();

    $sql = "SELECT idEmpresa,nombre FROM empresas where idEmpresa = $idEmpresa";
    $resultados = mysqli_query($conexion, $sql);

    if (!$resultados)die("Error al mostrar el nombre de la empresa");

    $datoEmpresa = array();

    while ($empresa = mysqli_fetch_array($resultados)) {

        $idEmpresa = $empresa['idEmpresa'];
        $nombre = $empresa['nombre'];
        $datoEmpresa[] = array("idEmpresa" => $idEmpresa, "nombre" => utf8_encode($nombre));
    }

    desconectar($conexion);

    $json_string = json_encode($datoEmpresa);
    print $json_string;
}
function dimeNombreUsuario($idUsuario) {

    $conexion = conectar();

    $sql = "SELECT idUsuario,nombre FROM usuarios where idUsuario = $idUsuario";
    $resultados = mysqli_query($conexion, $sql);

    if (!$resultados)
        die("Error al mostrar el nombre de la empresa");

    $datoUsuario = array();

    while ($usuario = mysqli_fetch_array($resultados)) {

        $idUsuario = $usuario['idUsuario'];
        $nombre = $usuario['nombre'];
        $datoUsuario[] = array("idUsuario" => $idUsuario, "nombre" => utf8_encode($nombre));
    }

    desconectar($conexion);

    $json_string = json_encode($datoUsuario);
    print $json_string;
}
