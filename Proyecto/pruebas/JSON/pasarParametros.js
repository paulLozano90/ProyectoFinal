
$(document).ready(function(){
    
    var url = "./pasarParametros.php";
    var jSonvar = { id : "3"};

    $.getJSON(url,jSonvar,function(evento) {
        $.each(evento, function(i, evento) {           
            
            $('#nombre')[0].innerHTML = evento.nombre;
            $('#empresa')[0].innerHTML = evento.idEmpresa;
            $('#tipo')[0].innerHTML = evento.idTipo;
        });
    });
});
