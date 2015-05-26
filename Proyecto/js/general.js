

$(document).ready(function () {

    if ($(document).height() > 991 || $(document).width() < 991) {
        $("#footer").css("position", "absolute");
    }

    //ocultar login para registrarse
    $("#abrir").click(function() {
        $("#formulario").show();
        $("#login").hide();
    });
    //Ocultar la descripcion del evento
    $(".btn-compra").click(function () {
        $("#dResumen").show();
        $("#dDescripcion").hide();
        $("#cantidad").val("1");
        $("#precioTotal")[0].innerHTML = $("#precioEvento")[0].innerHTML + " Euros";

    });
    $(".btn-volver").click(function () {        
        $("#dDescripcion").show();
        $("#dResumen").hide();
    });
    $("#cantidad").change(function () {
        
        var cantidad = $("#cantidad").val();
        var precio = $("#precioEvento")[0].innerHTML;

        $("#precioTotal")[0].innerHTML = (cantidad * precio)+" Euros";        
    });
    //Enlace para mostrar la descripcion del evento
    $(".btn-ofertas").click(function () {
        //Redireccion cuando haya value...
        //window.location.href = "descripEvento.html?id=" + $(this).val() + "";
        window.location.href = "descripEvento.html";
    });
});

//Funcion para sacar los parametros de la URL
$.urlParam = function (elemento) {

    var param = new RegExp('[\\?&]' + elemento + '=([^&#]*)');
    var url = window.location.href;
    var dato = param.exec(url);

    if (dato != null) {
        return dato[1];
    } else {
        return dato;
    }
}
