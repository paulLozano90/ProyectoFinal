<?php

include 'conexion.php';
$conexion = conectar();

function verificar_login($email,$password){
        
        global $conexion;
	$sql = "SELECT idUsuario, Nombre FROM usuarios WHERE email = '$email' and password = '$password'";
	$rec = mysqli_query($conexion,$sql);
        $data = mysqli_num_rows($rec);
        $resultado = $rec->fetch_assoc(); 
	
        if($data == 1)
        {
            $_SESSION["userId"] = $resultado["idUsuario"];
            $_SESSION["userName"] = $resultado["Nombre"];       
            $_SESSION["url_s"] = "../../html/principalUsuario.html?idUsuario=".$_SESSION["userId"];
            session_write_close();
            
            return true;
        }
        else
        {
            return false;
        }
}

