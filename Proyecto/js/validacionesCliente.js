////////Funciones de validación de campos, por parte del cliente, en el registro del formulario/////////
/////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////// Variables públicas globales ////////////////////////////////////////////////////////////////////

//public
var url = location.pathname;

//public Usuario
var nom, ap1, ap2, em, tel, pas;
var publicValidaciones = new Array(nom, ap1, ap2, em, tel, pas);
var campos = new Array("nombreUsuario", "apellido1", "apellido2", "emailUsuario", "telfUsuario", "passUsuario");

//public Empresa
var cif, nom_emp, em_emp, tel_emp, desc, dir, zip_code, loc, cit;
var publicValEmpresa = new Array(cif, nom_emp, em_emp, tel_emp, desc, dir, zip_code, loc, cit);
var camposEmpresa = new Array("CIF", "nombreEmpresa", "emailEmpresa", "telfEmpresa", "descripEmpresa", "dirEmpresa", "localEmpresa", "ciudadEmpresa");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////Main jQuery document: EXPORTADO A GENERAL.JS, NO TOCAR DE MOMENTO////////////////////////
/*$(document).ready(function ()
 {
 if ($(document).height() > 991 || $(document).width() < 991) {
 $("#footer").css("position", "absolute");
 }
 $("#abrir").click(function () {
 $("#formulario").show();
 //$("#registro").hide();
 });
 
 
 });*/
/////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////CONTROLADOR DEL FORMULARIO(CLIENTE)///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
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
}
;

function activaSubmit()
{
    var submit = document.getElementById("registro");
    var check = document.getElementById("condiciones");

    if (check.checked === true)
    {
        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
}
;

function validar()
{

    var aux = true;
    alert(url);
    if (url === "/registroUsuario.html")
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
    }
    else
    {
        var listaValidaciones = new Array
                (
                        validaCIF(),
                        validaTexto("nombreEmpresa"),
                        validaEmail(),
                        validaTelefono(),
                        validaDesc(),
                        validaZip(),
                        validaDir(),
                        validaTexto("localEmpresa"),
                        validaTexto("ciudadEmpresa")
                        );
    }


    for (var i = 0; i < listaValidaciones.length; i++)
    {
        if (listaValidaciones[i] === false)
        {
            alert('entra en validar');
            if (url === "/registroUsuario.html")
            {
                publicValidaciones[i] = false;

            }
            else
            {
                publicValEmpresa[i] = false;
            }
            aux = false;
        }
        else
        {
            if (url === "/registroUsuario.html")
            {
                publicValidaciones[i] = true;

            }
            else
            {
                publicValEmpresa[i] = true;
            }
        }
    }
    return aux;
}
;

function clickSubmit()
{
    var auxSub;
    alert('entra en click');
    if (validar() === true)
    {
        document.getElementById("error").style.display = 'none';
        auxSub = true;
    }
    else
    {
        document.getElementById("error").style.display = 'inline';
        for (var i = 0; i < publicValidaciones.length; i++)
        {
            alert("no ok");
            if (publicValidaciones[i] === false)
            {
                alert("ENTRA, campos[i]: " + campos[i]);
                (url === "/registroUsuario.html") ?
                        document.getElementById(campos[i]).setAttribute("style", "border-color: red; border-width: 2px;") :
                        document.getElementById(camposEmpresa[i]).setAttribute("style", "border-color: red; border-width: 2px;");

                document.getElementById("condiciones").checked = false;
                document.getElementById("condiciones").disabled = true;
                document.getElementById("registro").disabled = true;
                auxSub = false;
            }
            else
            {
                alert("else");
                alert(auxSub + " 1");
                (url === "/registroUsuario.html") ?
                        document.getElementById(campos[i]).setAttribute("style", "") :
                        document.getElementById(camposEmpresa[i]).setAttribute("style", "");
            }
        }
    }
    alert(auxSub);
    return auxSub;
}
;
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////FUNCIONES PARA VALIDACIÓN DE CAMPOS///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/*validaTexto: función que valida los campos de nombre y apellidos
 * @param {type} input
 * @returns {Boolean}
 */
function validaTexto(input)
{
    var elemento = $('#' + input).val();
    var exp;
    if (input !== "descripEmpresa") {
        exp = /^([A-Za-zñáéíóú]{2,40})+$/;
    }
    else {
        exp = /^([A-Za-zñáéíóú]{2,200})+$/;
    }

    if (elemento !== '' && elemento !== null)
    {
        if (exp.test(elemento))
        {
            return true;
        }
    }
    return false;
}
;

/*validaEmail: función que valida el campo email
 * @returns {undefined}
 */
function validaEmail()
{
    var email = $("#emailUsuario").val();
    var exp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

    if (email !== '' && email !== null)
    {
        if (exp.test(email))
        {
            return true;
        }
    }
    return false;
}
;

/*validaTelefono: función que valida el campo teléfono
 * @returns {Boolean}
 */
function validaTelefono()
{
    var telef = $("#telfUsuario").val();
    var exp = /^[9|6|7][0-9]{8}$/;

    if (telef !== '' && telef !== null)
    {
        if (exp.test(telef))
        {
            return true;
        }
    }
    return false;
}
;

/*validaContraseña: función que valida la contraseña (leer especificaciones en la expresión regular)
 * @returns {Boolean}
 */
function validaContraseña()
{
    var pass = $("#passUsuario").val();
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
}
;


function validaCIF() //EN PRUEBAS
{
    var CIF = $("#CIF").val();
    var exp = /^[a-zA-Z]{1}\\d{7}[a-jA-J0-9]{1}$/;

    if (CIF !== '' && CIF !== null)
    {
        if (exp.test(CIF))
        {
            return true;
        }
    }
    return false;
}



/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


