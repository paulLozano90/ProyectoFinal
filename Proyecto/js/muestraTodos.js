
$(document).ready(function() {
    
    if($('#usuarioLogeado')[0].innerHTML === ""){
        
        var nombreUsuario = getCookie("usuarioLogeado");
        nombreUsuario = nombreUsuario.replace("%20", " ");
        $('#usuarioLogeado')[0].innerHTML = "&nbsp;" + nombreUsuario + "&nbsp;&nbsp;";
    }
  
    muestraTodos("idEvento#asc");

    $("#selectOrder").change(function() {        
        muestraTodos($("#selectOrder").val());
    });
});

function muestraTodos(elemento) {

    var url = "../php/muestraTodos.php";
    var jSonvar = {elemento: elemento};

    $.getJSON(url, jSonvar, function(evento) {
        $("#tablaMuestraTodos tbody").html("");
        $.each(evento, function(i, evento) {          

            var fila = "<tr>"
                    + "<td>" + evento.nombreEvento + "</td>"
                    + "<td>" + evento.precioEvento + "</td>"                    
                    + "<td>" + evento.fechaCaducidad + "</td>"
                    + "<td>" + evento.tipoEvento + "</td>"
                    + "<td><button class='btn btn-default btn-evento' value='" + evento.idEvento + "'>Ver Evento</button></td>"
                    + "</tr>";

            $(fila).appendTo("#tablaMuestraTodos tbody");
            $("#tablaMuestraTodos th:nth-child(5)").css("width","108px");

            $(".btn-evento").click(function() {
                window.location.href = "descripEvento.html?idEvento=" + $(this).val() + "";
            });
        });
    });
}