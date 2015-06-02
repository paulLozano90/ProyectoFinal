

$(document).ready(function() {
    
    var url = "pruebaPHP.php";
    var valor = 1;
    $("#tablajson tbody").html("");
    $.getJSON(url, valor, function(clientes) {
        $.each(clientes, function(i, cliente) {
            var newRow =
                    "<tr>"
                    + "<td>" + cliente.idEmpresa + "</td>"
                    + "<td>" + cliente.idTipo + "</td>"
                    + "<td>" + cliente.nombre + "</td>"
                    + "</tr>";
            $(newRow).appendTo("#tablajson tbody");
        });
    });
});
