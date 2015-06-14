
$(document).ready(function() {

    $('#usuarioLogeado')[0].innerHTML = "&nbsp;" + getCookie("usuarioLogeado") + "&nbsp;";
  
    muestraTodos($("#ordenarTabla").val());

    $("#ordenarTabla").change(function() {        
        muestraTodos($("#ordenarTabla").val());
    });
});

function muestraTodos(elemento) {

    var url = "../php/muestraTodos.php";
    var jSonvar = {elemento: elemento};

    $.getJSON(url, jSonvar, function(evento) {
        $("#tablaMuestraTodos tbody").html("");
        $.each(evento, function(i, evento) {          

            var fila = "<tr>"
                    + "<td>" + evento.nombre + "</td>"
                    + "<td>" + evento.precioNormal + "</td>"
                    + "<td>" + evento.precioReducido + "</td>"
                    + "<td>" + evento.fechaCaducidad + "</td>"
                    + "<td><button class='btn btn-default btn-evento' value='" + evento.idEvento + "'>Ver Evento</button></td>"
                    + "</tr>";

            $(fila).appendTo("#tablaMuestraTodos tbody");

            $(".btn-evento").click(function() {
                window.location.href = "descripEvento.html?idEvento=" + $(this).val() + "";
            });
        });
    });
}