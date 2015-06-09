
$(document).ready(function() {

    var url = "muestraEventos.php";
    var z = 1;
    
    $.getJSON(url, function(evento) {

        $.each(evento, function(i, evento) {            
            
            for (var j=0; j<$("#ofertas > div").length-1; j++){
                
                switch (j) {

                case 0:
                    $("#ofertas > div")[z].children[j].innerHTML = evento.nombre;
                    break;

                case 1:
                    $("#ofertas > div")[z].children[j].innerHTML = evento.descripCorta;
                    break;
                
                case 2:
                    $("#ofertas > div")[z].children[j].value = evento.idEvento;
                    break;
                }
            }
            z++;
        });
    });
    $(".btn-ofertas").click(function() {
        //Redireccion cuando haya value...
        window.location.href = "descripEvento.html?idEvento=" + $(this).val() + "";
        //window.location.href = "descripEvento.html";
    });
});
