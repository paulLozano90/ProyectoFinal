
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <form action = "" method = "post" enctype="multipart/form-data">            
            <fieldset>                
                <label for="fotos">Foto (*):</label>
                <input type="file" name="foto"><br><br>
                <input type="submit"/>        
            </fieldset>
        </form>
    </body>
</html>

<?php

$foto = "";

if (isset($_FILES["foto"]) and $_FILES["foto"]["error"] == UPLOAD_ERR_OK) {

    if (!move_uploaded_file($_FILES["foto"]["tmp_name"], "C:/wamp/www/foto/" . basename($_FILES["foto"]["name"]))) {
        $foto = $_FILES["foto"]["name"];
    }
    echo $_FILES["foto"]["name"];
}