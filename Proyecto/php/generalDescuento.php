<?php

include ("conexion.php");

$nombreUsuario = 'Paul';
$idEvento = 1;

$datosUsuario = mostrarDatosUsuario($nombreUsuario);

list($idUsuario, $email) = explode('#', $datosUsuario);

$codigo = generarCodigo(6);
$disponible = comprobarCodigo($codigo);

while ($disponible == "no"){
    
    $codigo = generarCodigo(6);
    $disponible = comprobarCodigo($codigo);
}

//echo $idEvento.$idUsuario.$codigo;

insertLocalizador($idEvento,$idUsuario,$codigo);

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

function insertLocalizador($idEvento,$idUsuario,$codigo){
    
    $conexion = conectar();
    
    $insertarUsuario = "INSERT INTO usuariosEventos (idEvento,idUsuario,localizador) 
                        VALUES ('$idEvento','$idUsuario','$codigo')";
    
    $datos = mysqli_query($conexion,$insertarUsuario);
    
    if(!$datos) die("Error al insertar datos de la compra");
    
    if($datos){
        echo "insert realizado correctamente";
    }
}

?>
