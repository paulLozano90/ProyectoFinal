
$(document).ready(function() {

    idUsuario();
    muestraEventos();
    
    var idEvento = $.urlParam("idEvento");
    if(idEvento !== ""){
        muestraDescrip(idEvento);
    }

    //Envia enlace para cada evento
    $(".btn-ofertas").click(function() {
        window.location.href = "descripEvento.html?idEvento=" + $(this).val() + "";
    });
    //Ocultar la descripcion del evento
    $(".btn-compra").click(function() {
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
});

function idUsuario() {

    var url = "";
    var idUsuario = $.urlParam("idUsuario");
    var jSonvar = {idUsuario: idUsuario};

    $.getJSON(url, jSonvar, function(user) {
        $.each(user, function(i, user) {
            $('#usuarioLogeado')[0].innerHTML = user.nombre;
        });
    });
}

function muestraEventos() {

    var url = "../php/muestraEventos.php";
    var z = 1;

    $.getJSON(url, function(evento) {

        $.each(evento, function(i, evento) {

            for (var j = 0; j < $("#ofertas > div").length - 1; j++) {

                //alert("../images/"+evento.foto;);

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

function muestraDescrip(idEvento) {

    var url = "../php/muestraDescrip.php";    
    var jSonvar = {idEvento: idEvento};

    $.getJSON(url, jSonvar, function(evento) {
        $.each(evento, function(i, evento) {

            $('#tituloEvento')[0].innerHTML = evento.nombre;
            $('#descripEvento')[0].innerHTML = evento.descripcion;
            $('#precioNormal')[0].innerHTML = evento.precioNormal + "€";
            $('#precioReducido')[0].innerHTML = evento.precioReducido + "€";
            $('#precioNormalCarro')[0].innerHTML = evento.precioNormal;
            $('#precioReducidoCarro')[0].innerHTML = evento.precioReducido;
            $('#imgDescrip')[0].src = "../images/"+evento.foto;
        });
    });
}