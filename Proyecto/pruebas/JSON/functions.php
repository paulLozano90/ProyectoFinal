<?php

include 'conexion.php';
$conexion = conectar();

function verificar_login($email,$password){
        global $conexion;
	$sql = "SELECT * FROM usuarios WHERE email = '$email' and password = '$password'";
	$rec = mysqli_query($conexion,$sql);
        $data = mysqli_num_rows($rec);
	
        if($data == 1)
        {
            return true;
        }
        else
        {
            return false;
        }
}

