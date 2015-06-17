<?php

include 'conexion.php';
$conexion = conectar();
//controlUserName();

function verificar_login($email,$password,$tipoUsuario){
        
        global $conexion;
<<<<<<< HEAD
	$sql = "SELECT idUsuario, Nombre FROM usuarios WHERE email = '$email' and password = '$password'";        
=======
        
        $sql="";        
        if($tipoUsuario == "Usuario"){
            $sql = "SELECT idUsuario, Nombre FROM usuarios WHERE email = '$email' and password = '$password'";
        }else if ($tipoUsuario == "Empresa"){
            $sql = "SELECT idEmpresa, Nombre FROM empresas WHERE email = '$email' and password = '$password'";
        }
        
>>>>>>> origin/master
	$rec = mysqli_query($conexion,$sql);
        $data = mysqli_num_rows($rec);
        $resultado = $rec->fetch_assoc(); 
	
        if($data == 1)
        {
            session_start();
            $idTest = ($tipoUsuario == "Usuario")? "idUsuario": "idEmpresa";
            $_SESSION["userId"] = $resultado[$idTest];
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

