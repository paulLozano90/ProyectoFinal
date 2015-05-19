
var ejemplos = [["images/OFERTA.jpg", "OFERTA", "Descripcion oferta", 10],
    ["images/OFERTA2.jpg", "OFERTA2", "Descripcion oferta2", 20],
    ["images/OFERTA3.jpg", "OFERTA3", "Descripcion oferta3", 30]];

$(document).ready(function() {
    if ($(document).height() > 991 || $(document).width() < 991) {
        $("#footer").css("position", "absolute");
    }
    $("#abrir").click(function() {
        $("#formulario").show();
        $("#registro").hide();
    });

    mostrarDatos();
});

function mostrarDatos() {

    $("#ofertas div")[1].children[0].src = ejemplos[0][0];
    $("#ofertas div")[1].children[1].innerHTML = ejemplos[0][1];
    $("#ofertas div")[1].children[2].innerHTML = ejemplos[0][2];
    $("#ofertas div")[1].children[3].value = ejemplos[0][3];

    $("#ofertas div")[2].children[0].src = ejemplos[1][0];
    $("#ofertas div")[2].children[1].innerHTML = ejemplos[1][1];
    $("#ofertas div")[2].children[2].innerHTML = ejemplos[1][2];
    $("#ofertas div")[2].children[3].value = ejemplos[1][3];

    $("#ofertas div")[3].children[0].src = ejemplos[2][0];
    $("#ofertas div")[3].children[1].innerHTML = ejemplos[2][1];
    $("#ofertas div")[3].children[2].innerHTML = ejemplos[2][2];
    $("#ofertas div")[3].children[3].value = ejemplos[2][3];

//    var contDiv = $("#ofertas div").length;
//
//    for (var i = 0; i < ejemplos.length; i++) {
//        
//        for (var j = 0; j < ejemplos.length + 1; j++) {
//
//            //alert(ejemplos[i][j]);
//            z = 1;
//
//            while (z < 4) {
//
//                switch (j) {
//                    case 0:
//                        $("#ofertas div")[z].children[0].src = ejemplos[i][j];
//                        break;
//                    case 1:
//                        $("#ofertas div")[z].children[1].innerHTML = ejemplos[i][j];
//                        break;
//                    case 2:
//                        $("#ofertas div")[z].children[2].innerHTML = ejemplos[i][j];
//                        break;
//                    case 3:
//                        $("#ofertas div")[z].children[3].value = ejemplos[i][j];
//                        break;
//                }
//                z++;
//            }
//        }
//    }
}
