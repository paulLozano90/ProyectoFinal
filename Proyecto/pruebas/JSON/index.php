<?php

session_start();

define("server", "localhost");
define("user", "root");
define("pass", "");
define("bd", "unete");	
define("conexion", mysqli_connect($server, $user, $pass, $bd) 
	or die("Ha sucedido un error inexperado en la conexion de la base de datos"));

function verificar_login($user,$password,&$result){
	$sql = "SELECT * FROM usuarios WHERE email = '$user' and password = '$password'";
	$rec = mysqli_query($conexion,$sql);
	$count = 0;
	while($row = mysqli_fetch_object($rec)){

		$count ++;
		$result = $row;
	}

	if($count == 1){
		return 1;
	}
	else{
		return 0;
	}

}

if(!isset($_SESSION['userid']))
{
	if(isset($_POST['login'])){
		if(verificar_login(($_POST['email']), ($_POST['pass']), $result) ==1){
			$_SESSION['userid'] = $result->idusuario;

			header('location: index.php');
		}
		else{
			  echo '<div>Su usuario es incorrecto</div>'; 
		}
	}
	else{
		echo 'Su usuario se logeo correctamente';
		echo '<a href="logout.php">Logout</a>';
	}
}


//Login EMPRESA --> existe? --> true ---> getId -- pagempresa (url + &id=$id)