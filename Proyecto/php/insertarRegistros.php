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

include ("./conexion.php");

$conexion = conectar();

if(isset($_POST['registro'])){
    
    $nombreUsuario = $_POST['nombreUsuario'];
    $apellido1 = $_POST['apellido1'];
    $apellido2 = $_POST['apellido2'];
    $emailUsuario = $_POST['emailUsuario'];
    $telfUsuario = $_POST['telfUsuario'];
    $passUsuario = $_POST['passUsuario'];
}

?>