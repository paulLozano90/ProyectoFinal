

$(document).ready(function() {

    var tipoUsuario = $('#tipoUsuario')[0].innerHTML;
    var idEvento = $.urlParam("idEvento");
    var nombreUsuario = getCookie("usuarioLogeado");

    if (idEvento !== "") {
        if (tipoUsuario === "Usuario") {
            muestraEvento(idEvento);
        } else if (tipoUsuario === "Empresa") {
            muestraEventoEmpresa(idEvento);
        }
    }

    nombreUsuario = nombreUsuario.replace("%20", " ");
    $('#usuarioLogeado')[0].innerHTML = "&nbsp;" + nombreUsuario + "&nbsp;";

    //Ocultar la descripcion del evento
    $(".btn-unete").click(function() {
        $("#dResumen").show();
        $("#dDescripcion").hide();
        $("#cantidad").val("1");
        $("#precioTotal")[0].innerHTML = $("#precioReducido")[0].innerHTML;
    });
    //Volver a la descripcion
    $(".btn-volver").click(function() {
        $("#dDescripcion").show();
        $("#dResumen").hide();
    });
    //Cambiar el precio del evento
    $("#cantidad").change(function() {

        var cantidad = $("#cantidad").val();
        var precio = $("#precioReducidoCarro")[0].innerHTML;

        $("#precioTotal")[0].innerHTML = (cantidad * precio) + "€";
    });
    //Solicitar descuento
    $(".btn-descuento").click(function() {
        //alert(idEvento +"|"+nombreUsuario);
        solicitaDescuento(idEvento,nombreUsuario);
    });
});

function muestraEvento(idEvento) {

    var url = "../php/principalEvento.php";
    var jSonvar = {idEvento: idEvento};
    var nombreTipo = "";
    var enlaceTipo = "";

    $.getJSON(url, jSonvar, function(evento) {
        $.each(evento, function(i, evento) {

            $('#tituloEvento')[0].innerHTML = evento.nombre;
            $('#descripEvento')[0].innerHTML = evento.descripcion;
            $('#precioNormal')[0].innerHTML = evento.precioNormal + "€";
            $('#precioReducido')[0].innerHTML = evento.precioReducido + "€";
            $('#precioNormalCarro')[0].innerHTML = evento.precioNormal;
            $('#precioReducidoCarro')[0].innerHTML = evento.precioReducido;
            $('#imgDescrip')[0].src = "../images/" + evento.foto;
            $('#imgDescrip')[0].alt = evento.nombre;
            $("#tablaCondiciones tr p")[0].innerHTML = evento.empresa;
            $("#tablaCondiciones tr p")[1].innerHTML = evento.telefono;
            $("#tablaCondiciones tr p")[2].innerHTML = evento.direccion;
            $("#tablaCondiciones tr p")[3].innerHTML = evento.fechaCaducidad;

            if (evento.idTipo === "1") {
                nombreTipo = "Restaurantes";
                enlaceTipo = "eventosRestaurantes.html";
            } else if (evento.idTipo === "2") {
                nombreTipo = "Ocio";
                enlaceTipo = "eventosOcio.html";
            } else if (evento.idTipo === "3") {
                nombreTipo = "Salud y Belleza";
                enlaceTipo = "eventosSaludyBelleza.html";
            }

            var migas = "<li><a href='" + enlaceTipo + "'>" + nombreTipo + "</a></li>"
                    + "<li class='active'>" + evento.nombre + "</li>";

            $(migas).appendTo(".breadcrumb");

            for (var i = 0; i < $(".nav-header  a").length; i++) {
                if (nombreTipo === $(".nav-header  a")[i].innerText) {
                    $(".nav-header  > li")[i].className = "active";
                }
            }

        });
    });
}

function muestraEventoEmpresa(idEvento) {

    var url = "../php/principalEvento.php";
    var jSonvar = {idEvento: idEvento};

    $.getJSON(url, jSonvar, function(evento) {
        $.each(evento, function(i, evento) {

            $('#tituloEvento')[0].innerHTML = evento.nombre;
            $('#descripEvento')[0].innerHTML = evento.descripcion;
            $('#precioNormal')[0].innerHTML = evento.precioNormal + "€";
            $('#precioReducido')[0].innerHTML = evento.precioReducido + "€";
            $('#imgDescrip')[0].src = "../images/" + evento.foto;
            $('#imgDescrip')[0].alt = evento.nombre;
            $("#tablaCondiciones tr p")[0].innerHTML = evento.empresa;
            $("#tablaCondiciones tr p")[1].innerHTML = evento.telefono;
            $("#tablaCondiciones tr p")[2].innerHTML = evento.direccion;
            $("#tablaCondiciones tr p")[3].innerHTML = evento.fechaCaducidad;

            var migas = "<li><a href='principalEmpresa.html'>Mis Eventos</a></li>"
                    + "<li class='active'>" + evento.nombre + "</li>";

            $(migas).appendTo(".breadcrumb");
        });
    });
}

function solicitaDescuento(idEvento, nombreUsuario) {

    var url = "../php/.php";
    var jSonvar = {idEvento: idEvento, nombreUsuario: nombreUsuario};

    var caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var longitud = 8;

    alert(rand_code(caracteres, longitud));

}

function rand_code(chars, lon) {

        code = "";

        for (x = 0; x < lon; x++){

            rand = Math.floor(Math.random() * chars.length);

            code += chars.substr(rand, 1);

        }
        return code;
    }

    