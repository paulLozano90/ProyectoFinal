<?php

include 'conexion.php';
$conexion = conectar();
//controlUserName();

function verificar_login($email,$password){
        
        global $conexion;
	$sql = "SELECT idUsuario, Nombre FROM usuarios WHERE email = '$email' and password = '$password'";        
	$rec = mysqli_query($conexion,$sql);
        $data = mysqli_num_rows($rec);
        $resultado = $rec->fetch_assoc(); 
	
        if($data == 1)
        {
            session_start();
            $_SESSION["userId"] = $resultado["idUsuario"];
            $_SESSION["userName"] = $resultado["Nombre"];       
            return true;
        }
        else
        {
            return false;
        }
}

function controlUserName() {

    global $conexion;
    $idUsuario = $_GET["idUsuario"];
    $sql = "SELECT nombre FROM usuarios where idUsuario = $idUsuario";
    $resultados = mysqli_query($conexion, $sql);

    $user = array();

    while ($usuarios = mysqli_fetch_array($resultados)) {
        $nombre = $usuarios['nombre'];
        $user[] = array("nombre" => utf8_encode($nombre));
    }

    desconectar($conexion);

    $json_string = json_encode($user);
    print $json_string;
}

