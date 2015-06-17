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
    $datos = mysqli_query($conexion,$insertarUsuario);
    
    if($datos){
        header("Location: ../html/registroUsuario.html");
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
        header("Location: ../html/registroEmpresa.html");
    }
}

if(isset($_POST['registroEvento'])){
    
    $idEmpresa = 2;
    $idTipo = $_POST["tipo"];
    $nombreEvento = utf8_decode($_POST['nomEvento']);
    $descripCorta = utf8_decode($_POST['descEvento']);
    $descripcion = utf8_decode($_POST['descLargaEvento']);
    $precioNormal = $_POST['precioEvento'];
    $precioReducido = $_POST['precioDescEvento'];    
    $fechaCreacion = strftime( "%d/%m/%Y", time());
    $fechaCaducidad = $_POST['caducidadEvento'];
    list($año, $mes, $dia) = explode('-', $fechaCaducidad);
    $newCaducidad = $dia."/".$mes."/".$año;
    
    if (isset($_FILES["fotoEvento"]) and $_FILES["fotoEvento"]["error"] == UPLOAD_ERR_OK) {

        if (!move_uploaded_file($_FILES["fotoEvento"]["tmp_name"], "C:/wamp/www/imagenesEventos" . basename($_FILES["fotoEvento"]["name"]))) {
        }
    }
    
    $insertarEvento = "insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,
                       precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) values 
                       ('$idEmpresa','$idTipo','$nombreEvento','$descripCorta','$descripcion',"
            . "         '$precioNormal','$precioReducido','$fechaCreacion','$newCaducidad','";
    
    $insertarEvento .= $_FILES['fotoEvento']['name']."' )";
    
    //echo $insertarEvento;
    
    $datos = mysqli_query($conexion,$insertarEvento);
    
    if($datos){
        
        header("Location: ../html/principalEmpresa.html");
        //echo $insertarEvento;
    }
}
?>