<?php
include 'functions.php';

if(isset($_POST["login"]))
{
    $idses = $_POST["email"];
    $pass = $_POST["pass"];

    
    
    if(verificar_login($idses, $pass))
    {
             
        $getUser = mysqli_query($conexion, "SELECT idUsuario,Nombre FROM usuarios WHERE email = '$idses'");
        $resultado = $getUser->fetch_assoc();       
        
        $_SESSION["userId"] = $resultado["idUsuario"];
        $_SESSION["userName"] = $resultado["Nombre"];
        
        session_write_close();
        
        header("Location: ../../principalUsuario.html?idUsuario=".$_SESSION["userId"]);
    }
    else
    {
        echo 'El usuario introducido no existe';
    }
}
else
{
    print "pulse login";
}