
var ejemplos = [["../images/OFERTA.jpg","OFERTA","Descripcion oferta",10],
                ["../images/OFERTA2.jpg","OFERTA2","Descripcion oferta2",20],
                ["../images/OFERTA3.jpg","OFERTA3","Descripcion oferta3",30]];

$(document).ready(function () {
    if ($(document).height() > 991 || $(document).width() < 991){
        $("#footer").css("position", "absolute");
    }
    $("#abrir").click(function () {
        $("#formulario").slideDown("slow");
    });
    
    mostrarDatos();
});

function mostrarDatos(){
 
    for (var i=0; i<ejemplos.length; i++){
        for (var j=0; j<ejemplos.length; j++){
            
            alert(ejemplos[i][j]);
        }
    }
}
