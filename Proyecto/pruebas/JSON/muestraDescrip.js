
$(document).ready(function() {

    var url = "./muestraDescrip.php";
    var idEvento = $.urlParam("idEvento");
    var jSonvar = { id : idEvento}; 
    
    if(idEvento !== ""){
        
        $.getJSON(url,jSonvar,function(evento) {
            $.each(evento, function(i, evento) {           

                $('#tituloEvento')[0].innerHTML = evento.nombre;
                $('#descripEvento')[0].innerHTML = evento.descripcion;
                $('#precioNormal')[0].innerHTML = evento.precioNormal + "€";
                $('#precioReducido')[0].innerHTML = evento.precioReducido + "€";
                $('#precioNormalCarro')[0].innerHTML = evento.precioNormal;
                $('#precioReducidoCarro')[0].innerHTML = evento.precioReducido;
            });
        });
    }   

    if ($(document).height() > 991 || $(document).width() < 991) {
        $("#footer").css("position", "absolute");
    }

    //Ocultar login para registrarse
    $("#abrir").click(function() {
        $("#formulario").show();
        $("#login").hide();
    });
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

//Funcion para sacar los parametros de la URL
$.urlParam = function(elemento) {

    var param = new RegExp('[\\?&]' + elemento + '=([^&#]*)');
    var url = window.location.href;
    var dato = param.exec(url);

    if (dato != null) {
        return dato[1];
    } else {
        return dato;
    }
}