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
    $conexion = mysqli_connect($servidor,$user,$pass) or die ("Error al conectar a la BBDD ".mysqli_error());
    /*LEER IMPORTANTE: He tenido que utilizar la librería de funciones mysqli ya que mysql (la que nos dió paco) está obsoleta da
    error. Acordar esta nomenclatura para consultas y demás funciones y leeros la API por si hubiera alguna
    modificación con respecto a la anterior sintaxis, por ejemplo, en la siguiente linea la función es:
    mysqli(CONEXION, BASE_DE_DATOS) y no al revés.     */
    
    /* ---------->>>>> */mysqli_select_db($conexion,$bbdd);
    
    return $conexion;
}

?>