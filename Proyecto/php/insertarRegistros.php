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

include ("conexion.php");
$conexion = conectar();

if(isset($_POST['registroUsuario'])){
    
    $nombreUsuario = $_POST['nombreUsuario'];
    $apellido1 = $_POST['apellido1'];
    $apellido2 = $_POST['apellido2'];
    $emailUsuario = $_POST['emailUsuario'];
    $telfUsuario = $_POST['telfUsuario'];
    $passUsuario = $_POST['passUsuario'];
    
    $insertarUsuario = "insert into usuarios (nombre,apellido1,apellido2,email,telefono,password) values 
                ('$nombreUsuario','$apellido1','$apellido2','$emailUsuario',$telfUsuario,'$passUsuario')";
    //IMPORTANTE: en la función mysqli_query, los parámetros son de la forma (conexión,query)
    $datos = mysqli_query($conexion,$insertarUsuario);
    
    if($datos){
        header("Location: ../registroUsuario.html");
    }
}

if(isset($_POST['registroEmpresa'])){
    
    $CIF = $_POST['CIF'];
    $nombreEmpresa = $_POST['nombreEmpresa'];
    $emailEmpresa = $_POST['emailEmpresa'];
    $telfEmpresa = $_POST['telfEmpresa'];
    $descripEmpresa = $_POST['descripEmpresa'];
    $dirEmpresa = $_POST['dirEmpresa'];
    $codEmpresa = $_POST['codEmpresa'];
    $localEmpresa = $_POST['localEmpresa'];
    $ciudadEmpresa = $_POST['ciudadEmpresa'];
    
    $insertarEmpresa = "insert into empresas (cif,nombre,descripcion,email,telefono,direccion,localidad,codPostal,ciudad) values 
                ('$CIF','$nombreEmpresa','$descripEmpresa','$emailEmpresa',$telfEmpresa,'$dirEmpresa','$localEmpresa',$codEmpresa,'$ciudadEmpresa')";
    
    $datos = mysqli_query($conexion,$insertarEmpresa);
    
    if($datos){
        header("Location: ../registroEmpresa.html");
    }
}
?>