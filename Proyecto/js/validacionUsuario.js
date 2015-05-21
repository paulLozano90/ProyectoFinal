/*Funciones de validación de campos, por parte del cliente, en el registro del formulario*\
 /-------------------------------------------------------------------------------------------\
 
 
 
 
 *---------------------------------- Variables públicas ------------------------------------------------/*/
/**/                                                                                                   /*/
 /*/                                                                                                    /*/
  /*/   var nom, ap1, ap2, em, tel, pas;                                                                 /*/
   /*/
var publicValidaciones = new Array(nom, ap1, ap2, em, tel, pas);                                 /*/
 /*/
var campos = new Array("Nombre", "Apellido1", "Apellido2", "Email", "Teléfono", "Contraseña");   /*/
 /*/                                                                                                    /*/
  /*-----------------------------------------------------------------------------------------------------/*/


/*----------------------------------Main jQuery document-----------------------------------------------/*/

//funcionalidades ejecutadas al cargar la página
$(document).ready(function ()
{
    if ($(document).height() > 991 || $(document).width() < 991) {
        $("#footer").css("position", "absolute");
    }
    $("#abrir").click(function () {
        $("#formulario").show();
        //$("#registro").hide();
    });


});
/*-----------------------------------------------------------------------------------------------------/*/




/*-----------------------------------Funciones de validación-------------------------------------------/*/

/*validaTexto: función que valida los campos de nombre y apellidos
 * @param {type} input
 * @returns {Boolean}
 */
$.validaTexto = function (input)
{
    var elemento = $('#' + input).attr("value");
    var exp = /^([A-Za-zñáéíóú]{2,40})+$/;

    if (elemento !== '' && elemento !== null)
    {
        if (exp.test(elemento))
        {
            return true;
        }
    }
    return false;
};

/*validaEmail: función que valida el campo email
 * @returns {undefined}
 */
$.validaEmail = function ()
{
    var email = $("#emailUsuario").attr("value");
    var exp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (email !== '' && email !== null)
    {
        if (exp.test(email))
        {
            return true;
        }
    }
    return false;
};

/*validaTelefono: función que valida el campo teléfono
 * @returns {Boolean}
 */
$.validaTelefono = function ()
{
    var telef = $("#telfUsuario").attr("value");
    var exp = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

    if (telef !== '' && telef !== null)
    {
        if (exp.test(telef))
        {
            return true;
        }
    }
    return false;
};

/*validaContraseña: función que valida la contraseña (leer especificaciones en la expresión regular)
 * @returns {Boolean}
 */
$.validaContraseña = function ()
{
    var pass = $("#passUsuario").attr("value");
    //valida contraseñas con al menos una letra mayúscula, una minúscula, un número y longitud entre 6 y 12 caracteres.
    var exp = /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){6,12}.+$)/;

    if (pass !== '' && pass !== null)
    {
        if (exp.test(pass))
        {
            return true;
        }
    }
    return false;
};

function activaCondiciones()
{
    var check = document.getElementById("condiciones");
    var submit = document.getElementById("registro");
    var nom = $("#nombreUsuario").val();
    var ap1 = $("#apellido1").val();
    var ap2 = $("#apellido2").val();
    var email = $("#emailUsuario").val();
    var telf = $("#telfUsuario").val();
    var pass = $("#passUsuario").val();

    if (nom === "" || ap1 === "" || ap2 === "" || email === "" || telf === "" || pass === "")
    {
        check.disabled = true;
        check.checked = false;
        submit.disabled = true;
    }
    else
    {
        check.disabled = false;
    }
};

function activaSubmit()
{
    var submit = document.getElementById("registro");
    var check = document.getElementById("condiciones");
    
    if (check.checked === true)
    {
        submit.disabled = false;
    }
    else{
        submit.disabled = true;
    }
};

function validar()
{
    var listaValidaciones = new Array
            (
                    validaTexto("nombreUsuario"),
                    validaTexto("apellido1"),
                    validaTexto("apellido2"),
                    validaEmail(),
                    validaTelefono(),
                    validaContraseña()
                    );

    for (var i = 0; i < listaValidaciones.length; i++)
    {
        if (listaValidaciones[i] === false)
        {
            publicValidaciones[i] = false;
            return false;
        }
    }
    return true;
};

function clickSubmit()
{
    if (validar())
    {
        alert("todo ok!");
        return true;
    }
    else
    {
        $("#error").show();
        for (var i = 0; i < publicValidaciones.length; i++)
        {
            if (publicValidaciones[i] === false)
            {
                $("#" + campos[i]).css({"border": "2px", "border-color": "red"});
                return false;
            }
        }
    }
};

/*-----------------------------------------------------------------------------------------------------/*/



