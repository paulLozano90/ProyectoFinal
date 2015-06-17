
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

window.onload = function () {
    cookies();
    //deleteAllCookies();
};

/* nombre:      nVentana
 * descrpcion:  funcion que abre las ventanas emergentes de la web
 * parametros:  ninguno
 * devuelve:    nada
 */

function nVentana(link) {
    var nv = window.open(link, "nventana", "scrollbars=yes, top=0, left=0, height=650px, width=600px");
}

/* nombre:      $urlParam
 * descrpcion:  funcion que nos da los parametros de la url
 * parametros:  elemento
 * devuelve:    valor del parametro de la url
 */
     
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

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function cookies() {
    if (!getCookie("cookieHabilitado")) {        
        $("#avisoCookies").show();
        $("#avisoCookies").css("height", "33px");
    }
    else {
        $("#avisoCookies").hide();
    }
}

function aceptarCookie() {
    $("#avisoCookies").hide();
    $("#avisoCookies").css("transition", "all 0.5s");
    $("#avisoCookies").css("height", "0px");
    setCookie("cookieHabilitado", true, 365);
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

