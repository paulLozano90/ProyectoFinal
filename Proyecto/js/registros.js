
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

    //Ocultar login para registrarse
    $("#abrir").click(function() {
        $("#formulario").show();
        $("#login").hide();
    });
});
