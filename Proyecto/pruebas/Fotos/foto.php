
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <form action = ""  method = "post" enctype="multipart/form-data">            
            <fieldset>                
                <label for="fotos">Foto (*):</label>
                <input type="file" name="foto"><br><br>
                <input type="submit" name="form"/>        
            </fieldset>
        </form>
    </body>
</html>

<?php

    include ("conexion.php");
    $conexion = conectar();

    if(isset($_POST['form'])){
    
    $idEmpresa = '1';
    $idTipo = '1';
    $nombreEvento = 'Restaurante Peruano';
    $descripCorta = 'Menu para dos personas';
    $descripcion = 'Menu para dos personas donde disfrutaras...';
    $precioNormal = '45';
    $precioReducido = '20';
    $fechaCreacion = '19/04/2015';
    $fechaCaducidad = '25/05/2015';
    
    if (isset($_FILES["foto"]) and $_FILES["foto"]["error"] == UPLOAD_ERR_OK) {

        if (!move_uploaded_file($_FILES["foto"]["tmp_name"], "C:/wamp/www/Proyecto/images/" . basename($_FILES["foto"]["name"]))) {
        }
    }
    
    $insertarEvento = "insert into eventos (idEmpresa,idTipo,nombre,descripCorta,descripcion,
                       precioNormal,precioReducido,fechaCreacion,fechaCaducidad,foto) values 
                       ('$idEmpresa','$idTipo','$nombreEvento','$descripCorta','$descripcion','$precioNormal','$precioReducido',
                       '$fechaCreacion','$fechaCaducidad','";
    
    $insertarEvento .= $_FILES['foto']['name']."' )";
    
    echo $insertarEvento;
    }