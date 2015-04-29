//Aplica slideDown al formulario de registro cuando se hace clic sobre el enlace #abrir
$(document).ready(function(){
    $("#abrir").click(function(){
        $("#formulario").slideDown("slow");
    });
});