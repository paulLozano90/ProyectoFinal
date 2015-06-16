
$(document).ready(function () {

    var tipoEvento = $(".nav-header > .active a")[0].innerText;

    idUsuario();
    muestraEventos(tipoEvento);

    //Envia enlace para cada evento
    $(".btn-ofertas").click(function () {
        window.location.href = "descripEvento.html?idEvento=" + $(this).val() + "";
    });
});

function idUsuario() {

    var url = "../php/principalUsuario.php";
    var idUsuario = $.urlParam("idUsuario");
    var jSonvar = {idUsuario: idUsuario};

    $.getJSON(url, jSonvar, function (user) {
        $.each(user, function (i, user) {
            $('#usuarioLogeado')[0].innerHTML = "&nbsp;" + user.nombre + "&nbsp;&nbsp;&nbsp;";
            setCookie("usuarioLogeado", user.nombre, 365);
        });
    });
}

function GetUrlValue(VarSearch) {
    var Url = location.href;
    Url = Url.replace(/.*\?(.*?)/, "$1");
    Variables = Url.split("&");
    for (i = 0; i < Variables.length; i++) {
        Separ = Variables[i].split("=");
        eval('var ' + Separ[0] + '="' + Separ[1] + '"');
    }
}

function muestraEventos(tipoEvento) {

    var url = "../php/muestraEventos.php";
    var jSonvar = {tipoEvento: tipoEvento};
    var z = 1;

    $.getJSON(url, jSonvar, function (evento) {

        $.each(evento, function (i, evento) {

            for (var j = 0; j < $("#ofertas > div").length - 1; j++) {

                switch (j) {

                    case 0:
                        $("#ofertas > div")[z].children[j].src = "../images/" + evento.foto;
                        break;

                    case 1:
                        $("#ofertas > div")[z].children[j].innerHTML = evento.nombre;
                        break;

                    case 2:
                        $("#ofertas > div")[z].children[j].innerHTML = evento.descripCorta;
                        break;

                    case 3:
                        $("#ofertas > div")[z].children[j].value = evento.idEvento;
                        break;
                }
            }
            z++;
        });
    });
}