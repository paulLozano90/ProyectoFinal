<?php
function conectar(){
    
    $server = "localhost";
    $user = "root";
    $pass = "";
    $bd = "unete";

    $conexion = mysqli_connect($server, $user, $pass, $bd) 
    or die("Ha sucedido un error inexperado en la conexion de la base de datos");
    
    return $conexion;
}

function desconectar($conexion){
    
    $cerrarConexion = mysqli_close($conexion) 
    or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
    
    return $cerrarConexion;
}
?>