

$(document).ready(function() {
    
    var url = "pruebaPHP.php";
    var valor = 1;
    $("#tablajson tbody").html("");
    $.getJSON(url, valor, function(clientes) {
        $.each(clientes, function(i, cliente) {
            var newRow =
                    "<tr>"
                    + "<td>" + cliente.id_empresa + "</td>"
                    + "<td>" + cliente.idTipo + "</td>"
                    + "<td>" + cliente.nombre + "</td>"
                    + "</tr>";
            $(newRow).appendTo("#tablajson tbody");
            
            $('#nombre')[0].innerHTML = cliente.nombre;
            $('#empresa')[0].innerHTML = cliente.id_empresa;
            $('#tipo')[0].innerHTML = cliente.idTipo;
        });
    });
});
