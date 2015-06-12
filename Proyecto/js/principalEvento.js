

$(document).ready(function() {
    
    var idEvento = $.urlParam("idEvento");
    if(idEvento !== ""){
        muestraEvento(idEvento);        
    }
    
    $('#usuarioLogeado')[0].innerHTML = "&nbsp;"+getCookie("usuarioLogeado")+"&nbsp;";

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

function muestraEvento(idEvento) {

    var url = "../php/principalEvento.php";    
    var jSonvar = {idEvento: idEvento};

    $.getJSON(url, jSonvar, function(evento) {
        $.each(evento, function(i, evento) {

            $('.breadcrumb .active')[0].innerHTML = evento.nombre;
            $('#tituloEvento')[0].innerHTML = evento.nombre;
            $('#descripEvento')[0].innerHTML = evento.descripcion;
            $('#precioNormal')[0].innerHTML = evento.precioNormal + "€";
            $('#precioReducido')[0].innerHTML = evento.precioReducido + "€";
            $('#precioNormalCarro')[0].innerHTML = evento.precioNormal;
            $('#precioReducidoCarro')[0].innerHTML = evento.precioReducido;
            $('#imgDescrip')[0].src = "../images/"+evento.foto;
            $("#tablaCondiciones tr p")[0].innerHTML = evento.empresa;
            $("#tablaCondiciones tr p")[1].innerHTML = evento.telefono;
            $("#tablaCondiciones tr p")[2].innerHTML = evento.direccion;
            $("#tablaCondiciones tr p")[3].innerHTML = evento.fechaCaducidad;
        });
    });
}