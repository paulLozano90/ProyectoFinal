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
    
    $user = "root";
    $pass = "";
    $servidor = "localhost";
    $bbdd = "unete";
    $conexion = mysql_connect($servidor,$user,$pass) or die ("Error al conectar a la BBDD ".mysql_error());
    mysql_select_db($bbdd, $conexion);
    
    return $conexion;
}

?>