
$(document).ready(function() {

    idUsuario();
    muestraEventos();

    //Envia enlace para cada evento
    $(".btn-ofertas").click(function() {
        window.location.href = "descripEvento.html?idEvento=" + $(this).val() + "";
    });
});

function idUsuario() {

    var url = "../php/principalUsuario.php";
    var idUsuario = 3;
    var jSonvar = {idUsuario: idUsuario};

    $.getJSON(url, jSonvar, function(user) {
        $.each(user, function(i, user) {
            $('#usuarioLogeado')[0].innerHTML = "&nbsp;"+user.nombre+"&nbsp;";
            setCookie("usuarioLogeado", user.nombre, 365);
        });
    });
}

function muestraEventos() {

    var url = "../php/muestraEventos.php";
    var z = 1;

    $.getJSON(url, function(evento) {

        $.each(evento, function(i, evento) {

            for (var j = 0; j < $("#ofertas > div").length - 1; j++) {

                switch (j) {                    

                    case 0:                        
                        $("#ofertas > div")[z].children[j].src = "../images/"+evento.foto;
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