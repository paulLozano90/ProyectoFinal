<?php

include ("conexion.php");

//$nombreUsuario = 'Paul';
//$idEvento = 1;
//$precioTotal = 15;

$nombreUsuario = $_GET["nombreUsuario"];
$idEvento = $_GET['idEvento'];
$precioTotal = $_GET['precioTotal'];

$datosUsuario = mostrarDatosUsuario($nombreUsuario);

list($idUsuario, $email) = explode('#', $datosUsuario);

$codigo = generarCodigo(6);
$disponible = comprobarCodigo($codigo);

while ($disponible == "no"){
    
    $codigo = generarCodigo(6);
    $disponible = comprobarCodigo($codigo);
}

//echo $idEvento.$idUsuario.$codigo;

$correcto = insertLocalizador($idEvento,$idUsuario,$codigo,$precioTotal);

$json_string = json_encode($correcto);
echo $json_string;

function generarCodigo($longitud) {

    $localizador = '';
    $cadena = '1234567890abcdefghijklmnopqrstuvwxyz';
    $maxLogitud = strlen($cadena) - 1;

    for ($i = 0; $i < $longitud; $i++) {
        $localizador .= $cadena{mt_rand(0, $maxLogitud)};
    }
    return $localizador;
}

function mostrarDatosUsuario($nombre) {

    $conexion = conectar();

    $sql = "SELECT idUsuario,email FROM usuarios WHERE nombre = '$nombre'";
    $resultados = $conexion->query($sql);

    if ($resultados->num_rows > 0) {
        while ($dato = $resultados->fetch_assoc()) {
            $idUsuario = $dato["idUsuario"];
            $email = $dato["email"];
        }
    }
    desconectar($conexion);
    
    return $idUsuario."#".$email;
}

function comprobarCodigo($codigo){
    
    $conexion = conectar();
    
    $disponible = "";
    $sql = "SELECT localizador FROM usuariosEventos WHERE localizador = '$codigo'";
    $resultados = $conexion->query($sql);

    if ($resultados->num_rows > 0) {
        while ($dato = $resultados->fetch_assoc()) {
            $disponible = "no";
        }
    }else{
        $disponible = "si";
    }
    desconectar($conexion);
    
    return $disponible;
}

function insertLocalizador($idEvento,$idUsuario,$codigo,$precioTotal){
    
    $conexion = conectar();
    $correcto = "";
    $fechaActual = strftime( "%d/%m/%Y", time());
    
    $insertarUsuario = "INSERT INTO usuariosEventos (idEvento,idUsuario,localizador,precioTotal,fechaSolicitud) 
                        VALUES ('$idEvento','$idUsuario','$codigo', $precioTotal,'$fechaActual')";
    
    $datos = mysqli_query($conexion,$insertarUsuario);
    
    if(!$datos) die("Error al insertar datos de la compra");
    
    if($datos){
        //$datosDescuento = $codigo."#".$precioTotal;
        $correcto = "True";
    }else{
        $correcto = "False";
    }
    return $correcto;
}

?>
