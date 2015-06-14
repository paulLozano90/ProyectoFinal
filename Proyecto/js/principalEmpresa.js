
$(document).ready(function() {
    
    var idEmpresa = 1;
    muestraEventosEmpresa(idEmpresa,"idEvento#asc");
    
    $("#selectOrder").change(function() {        
        muestraEventosEmpresa(idEmpresa,$("#selectOrder").val());
    });
});

function muestraEventosEmpresa(idEmpresa,elemento){
    
    var url = "../php/principalEmpresa.php";
    var jSonvar = {idEmpresa: idEmpresa, elemento: elemento};
    
    $.getJSON(url, jSonvar, function(evento) {
        $("#tablaMuestraTodos tbody").html("");
        $.each(evento, function(i, evento) { 
            var fila = "<tr>"
                    + "<td>" + evento.nombreEvento + "</td>"
                    + "<td>" + evento.precioNormal + "</td>"
                    + "<td>" + evento.precioReducido + "</td>" 
                    + "<td>" + evento.fechaCreacion + "</td>"
                    + "<td>" + evento.fechaCaducidad + "</td>"
                    + "<td><button class='btn btn-default btn-evento' value='" + evento.idEvento + "'>Ver Evento</button></td>"
                    + "</tr>";

            $(fila).appendTo("#tablaMuestraTodos tbody");
            $("#tablaMuestraTodos th:nth-child(1)").css("width","300px");
            
            $('#usuarioLogeado')[0].innerHTML = "&nbsp;"+evento.empresa+"&nbsp;";
            setCookie("usuarioLogeado", evento.empresa, 365);

            $(".btn-evento").click(function() {
                window.location.href = "descripEventoEmpresa.html?idEvento=" + $(this).val() + "";
            });
        });
    });
}