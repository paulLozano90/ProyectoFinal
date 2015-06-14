

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
            $('#imgDescrip')[0].src = "../images/"+evento.foto;
            $('#imgDescrip')[0].alt = evento.nombre;
            $("#tablaCondiciones tr p")[0].innerHTML = evento.empresa;
            $("#tablaCondiciones tr p")[1].innerHTML = evento.telefono;
            $("#tablaCondiciones tr p")[2].innerHTML = evento.direccion;
            $("#tablaCondiciones tr p")[3].innerHTML = evento.fechaCaducidad;
            
            if(evento.idTipo === "1"){
                nombreTipo = "Restaurantes";
                enlaceTipo = "eventosRestaurantes.html";
            }else if(evento.idTipo === "2"){
                nombreTipo = "Ocio";
                enlaceTipo = "eventosOcio.html";
            }else if(evento.idTipo === "3"){
                nombreTipo = "Salud y Belleza";
                enlaceTipo = "eventosSaludyBelleza.html";
            }
            
            var migas ="<li><a href='principalUsuario.html'>Home</a></li>"
                      +"<li><a href='"+enlaceTipo+"'>"+nombreTipo+"</a></li>"
                      +"<li class='active'>"+evento.nombre+"</li>";
              
            $(migas).appendTo(".breadcrumb");
            
            for (var i=0; i<$(".nav-header  a").length; i++){
                if(nombreTipo === $(".nav-header  a")[i].innerText){
                    $(".nav-header  > li")[i].className = "active";
                }
            }
            
        });
    });
}