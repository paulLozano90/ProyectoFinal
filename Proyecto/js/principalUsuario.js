$(document).ready(function () {


    var url = "../php/principalUsuario.php";
    var idUsuario = $.urlParam("idUsuario");
    var jSonvar = {idUsuario: idUsuario};


    $.getJSON(url, jSonvar, function (user) {
        $.each(user, function (i, user) {
            $('#usuarioLogeado')[0].innerHTML = user.nombre;
        });
    });
});
