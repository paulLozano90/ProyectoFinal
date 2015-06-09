
/*
Autor=Paul Lozano Cruzado, Elias Sanchez Arroyo y Daniel Carrasco Barcena
Fecha=09-jun-2015
Licencia=gpl30
Version=1.0
Descripcion=
*/     

/* 
 * Copyright (C) 2015 Paul Lozano Cruzado 
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

$(document).ready(function() {

    //Ocultar la descripcion del evento
    $(".btn-compra").click(function() {
        $("#dResumen").show();
        $("#dDescripcion").hide();
        $("#cantidad").val("1");
        $("#precioTotal")[0].innerHTML = $("#precioEvento")[0].innerHTML + " Euros";

    });
    $(".btn-volver").click(function() {
        $("#dDescripcion").show();
        $("#dResumen").hide();
    });
    $("#cantidad").change(function() {

        var cantidad = $("#cantidad").val();
        var precio = $("#precioEvento")[0].innerHTML;
        $("#precioTotal")[0].innerHTML = (cantidad * precio) + " Euros";
    });
    //Enlace para mostrar la descripcion del evento
    $(".btn-ofertas").click(function() {
        
        window.location.href = "descripEvento.html?id=" + $(this).val() + "";        
    });
});