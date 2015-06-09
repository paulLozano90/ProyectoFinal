<?php

if (isset($_FILES["foto"]) and $_FILES["foto"]["error"] == UPLOAD_ERR_OK) {

    //Si el archivo no es una foto JPEG, la funcion lo rechaza
    if ($_FILES["foto"]["type"] != "image/jpeg") {
        
    } elseif (!move_uploaded_file($_FILES["foto"]["tmp_name"], "foto/" . basename($_FILES["foto"]["name"]))) {
        $foto = $_FILES["foto"]["name"];
    }
} else {  

    switch ($_FILES["foto"]["error"]) {

        case UPLOAD_ERR_INI_SIZE:
            
            break;
        case UPLOAD_ERR_FORM_SIZE:
            
            break;
        case UPLOAD_ERR_NO_FILE:
            
            break;
        default:
    }
}

echo $foto;