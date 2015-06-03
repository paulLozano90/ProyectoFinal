
var datos = [["img/jQurery.gif", "JQuery", "Descripcion jQuery", 10],
    ["img/mysql.png", "MySql", "Descripcion mySql", 15],
    ["img/php.jpg", "Php", "Descripcion Php", 20]];

$(document).ready(function() {

//    var numDiv = $("#ofertas > div").length;
//    var z = 1;
//
//    for ( var i = 0; i < datos.length; i++) {       
//
//        for (var j = 0; j < datos.length + 1; j++) { 
//
//            alert("NumDiv: " + z + " | Dato: " + datos[i][j]); 
//
//            switch (j) {
//
//                case 0:
//                    $("#ofertas > div")[z].children[j].src = datos[i][j];
//                    break;
//
//                case 1:
//                    $("#ofertas > div")[z].children[j].innerHTML = datos[i][j];
//                    break;
//
//                case 2:
//                    $("#ofertas > div")[z].children[j].innerHTML = datos[i][j];
//                    break;
//
//                case 3:
//                    $("#ofertas > div")[z].children[j].value = datos[i][j];
//                    break;
//            }
//        }
//        z++;
//    }

    var url = "muestraEventos.php";
    var z = 0;
    var d = 0;

    $("#tablajson tbody").html("");

    $.getJSON(url, function(evento) {
        
        $.each(evento, function(i, evento) {
            z++;
            d=0;
            $.each(evento, function(j, eventos) {
                d++;
            
            alert(z +"->"+ eventos+"->"+d);
            
            switch (i) {

                case 1:
                    $("#ofertas > div")[0].children[z].innerHTML = eventos;
                    break;

                case 2:
                    $("#ofertas > div")[0].children[z].innerHTML = eventos;
                    break;
            }
            });
            
//            $.each(evento, function(j, evento) {
//            
//            alert(i);
//            alert(j);
//            alert(j.nombre);
//            alert(evento.descripcion);
//            alert(evento.precioNormal);
//            alert(evento.precioReducido);
//            
////            var newRow =
////                    "<tr>"
////                    + "<td>" + evento.nombre + "</td>"
////                    + "<td>" + evento.descripcion + "</td>"
////                    + "<td>" + evento.precioNormal + "</td>"
////                    + "<td>" + evento.precioReducido + "</td>"
////                    + "</tr>";
////            $(newRow).appendTo("#tablajson tbody");
//            });
        });
    });
});

//$(document).ready(function() {
//    
//    var url = "muestraEventos.php";
//    
//    $("#tablajson tbody").html("");
//    
//    $.getJSON(url, function(evento) {
//        $.each(evento, function(i, evento) {
//            var newRow =
//                    "<tr>"
//                    + "<td>" + evento.nombre + "</td>"
//                    + "<td>" + evento.descripcion + "</td>"
//                    + "<td>" + evento.precioNormal + "</td>"
//                    + "<td>" + evento.precioReducido + "</td>"
//                    + "</tr>";
//            $(newRow).appendTo("#tablajson tbody");
//        });
//    });
//});
