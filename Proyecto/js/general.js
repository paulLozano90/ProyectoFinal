$(document).ready(function () {
    if ($(document).height() > 991 || $(document).width() < 991)
    {
        $("#footer").css("position", "absolute");
    }
    $("#abrir").click(function () {

        $("#formulario").slideDown("slow");

    });
});




