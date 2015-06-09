$(document).ready(function () {


    var url = "./muestraDescrip.php";
    var idUsuario = $.urlParam("idUsuario");
    var jSonvar = {idUsuario: idUsuario};


    $.getJSON(url, jSonvar, function (usuario) {
        $.each(evento, function (i, usuario) {
            $('#usuarioLogueado')[0].innerHTML = usuario.nombre;
        });
    });
});
