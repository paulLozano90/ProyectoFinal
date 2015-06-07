<?php
/*
  Autor = Paul Lozano Cruzado
  Fecha = 19-may-2015
  Licencia = default
  Version = 1.0
  Descripcion =
 */

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>

<?php

function conectar(){
    
    $servidor = "localhost";
    $user = "root";
    $pass = "";    
    $bbdd = "unete";
    
    $conexion = mysqli_connect($servidor,$user,$pass) or die ("Error al conectar a la BBDD ".mysqli_error());
    mysqli_select_db($conexion,$bbdd);
    
    return $conexion;
}

function desconectar($conexion){
    
    $cerrarConexion = mysqli_close($conexion) or die("Ha sucedido un error inexperado en la desconexion de la base de datos");
    
    return $cerrarConexion;
}

?>