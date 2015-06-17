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
var cif, nom_emp, em_emp,pasem, tel_emp, desc, dir, zip_code, loc, cit;
var publicValEmpresa = new Array(cif, nom_emp, em_emp, pasem,  tel_emp, desc, dir, zip_code, loc, cit);
var camposEmpresa = new Array("CIF", "nombreEmpresa", "emailEmpresa","passEmpresa", "telfEmpresa", "descripEmpresa", "dirEmpresa", "codEmpresa", "localEmpresa", "ciudadEmpresa");

//public Evento
var tipo, nom_ev, desc_ev, cuent, pre, fpre, cad, fot;
var publicValEvento = new Array(tipo, nom_ev, pre, fpre, cad, fot, desc_ev, cuent);
var camposEvento = new Array("cantidad", "nomEvento", "precioEvento", "precioDescEvento", "caducidadEvento", "fotoEvento", "descEvento", "descLargaEvento");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////CONTROLADOR DEL FORMULARIO(CLIENTE)///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
function activaCondiciones()
{

    if (url === "/html/registroUsuario.html")
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
    if(url === "/html/registroEmpresa.html")
    {
       // alert("entra");
        var check = document.getElementById("condiciones");
        var submit = document.getElementById("registro");
        var cif = $("#CIF").val();
        var nom = $("#nombreEmpresa").val();
        var em = $("#emailEmpresa").val();
        var telf = $("#telfEmpresa").val();
        var desc = $("#descripEmpresa").val();
        var dir = $("#dirEmpresa").val();
        var cod = $("#codEmpresa").val();
        var loc = $("#localEmpresa").val();
        var ciu = $("#ciudadEmpresa").val();
        var pass = $("#passEmpresa").val();
        
        if (cif === "" || nom === "" || em === "" || telf === "" || desc === "" || dir === "" || cod === "" || loc === "" || ciu === "" || pass === "")
        {
           // alert("entra if");
            check.disabled = true;
            check.checked = false;
            submit.disabled = true;
        }
        else
        {
           // alert("entra else");
            check.disabled = false;
        }
    }
    if(url === "/html/creaEvento.html")
    {
        var check = document.getElementById("condiciones");
        var submit = document.getElementById("registro");
        var sel = $("#cantidad").val().trim();
        var nom = $("#nomEvento").val();
        var desc = $("#descEvento").val();
        var descL = $("#descLargaEvento").val();
        var preE = $("#precioEvento").val();
        var preD = $("#precioDescEvento").val();
        var cad = $("#caducidadEvento").val();
        var fot = $("#fotoEvento").val();
        
        if(sel === "" || nom === "" || desc === "" || descL === "" || preE === "" || preD === "")
        {   
            check.disabled = true;
            check.checked = false;
            submit.disabled = true;
        }
        else
        {
            //alert("entra else");
            check.disabled = false;
        }
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
    //alert(url);
    if (url === "/html/registroUsuario.html")
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
    else if (url === "/html/registroEmpresa.html")
    {
        // alert("entra en if validar");
        var listaValidaciones = new Array
                (
                        validaCIF(),
                        validaTexto("nombreEmpresa"),
                        validaEmail(),
                        validaContraseña(),
                        validaTelefono(),
                        validaTexto("descripEmpresa"),
                        validaDir(),
                        validaZip(),
                        validaTexto("localEmpresa"),
                        validaTexto("ciudadEmpresa")
                        );
    }
    else
    {
        var listaValidaciones = new Array
                (
                        validaTipo(),
                        validaTexto("nomEvento"),
                        validaPrecio("precioEvento"),
                        validaPrecio("precioDescEvento"),
                        validaCad(),
                        validaFoto(),
                        validaTexto("descEvento"),
                        validaTexto("descLargaEvento")
                );
    }

    //alert("sale if validar");

    for (var i = 0; i < listaValidaciones.length; i++)
    {
        // alert("entra en for");
        if (listaValidaciones[i] === false)
        {
            //    alert("entra en for if false");
            //  alert('entra en validar');
            if (url === "/html/registroUsuario.html")
            {
                publicValidaciones[i] = false;

            }
            else if (url === "/html/registroEmpresa.html")
            {
                publicValEmpresa[i] = false;
            }
            else
            {
                publicValEvento[i] = false;
            }
            aux = false;
        }
        else
        {
            // alert("entra en for if true");
            if (url === "/html/registroUsuario.html")
            {
                publicValidaciones[i] = true;

            }
            else if (url === "/html/registroEmpresa.html")
            {
                publicValEmpresa[i] = true;
            }
            else
            {
                publicValEvento[i] = true;
            }
        }
    }
    return aux;
}
;

function clickSubmit()
{
    var auxSub;
    //alert('entra en click');
    if (validar() === true)
    {
        document.getElementById("error").style.display = 'none';
        auxSub = true;
    }
    else
    {
       // alert("else click");
        document.getElementById("error").style.display = 'inline';
        if (url === "/html/registroUsuario.html")
        {
            for (var i = 0; i < publicValidaciones.length; i++)
            {
                //alert("no ok");
                if (publicValidaciones[i] === false)
                {
                    //alert("ENTRA, campos[i]: " + campos[i]);
                    document.getElementById(campos[i]).setAttribute("style", "border-color: #FF7171; border-width: 2px;");
                    //document.getElementById(camposEmpresa[i]).setAttribute("style", "border-color: red; border-width: 2px;");
                    document.getElementById("condiciones").checked = false;
                    document.getElementById("condiciones").disabled = true;
                    document.getElementById("registro").disabled = true;
                    auxSub = false;
                }
                else
                {
                    //alert("else");
                    //alert(auxSub + " 1");
                    document.getElementById(campos[i]).setAttribute("style", "");
                    //document.getElementById(camposEmpresa[i]).setAttribute("style", "");
                }
            }
        }
        else if (url === "/html/registroEmpresa.html")
        {
            for (var i = 0; i < publicValEmpresa.length; i++)
            {
                //alert("no ok");
                if (publicValEmpresa[i] === false)
                {
                    //alert("ENTRA, camposEMpresa[i]: " + camposEmpresa[i]);
                    document.getElementById(camposEmpresa[i]).setAttribute("style", "border-color: red; border-width: 2px;");
                    document.getElementById("condiciones").checked = false;
                    document.getElementById("condiciones").disabled = true;
                    document.getElementById("registro").disabled = true;
                    auxSub = false;
                }
                else
                {
                    //alert("else");
                    //alert(auxSub + " 1");
                    document.getElementById(camposEmpresa[i]).setAttribute("style", "");
                }
            }
        }
        else//
        {
            for (var i = 0; i < publicValEvento.length; i++)
            {
                //alert("no ok");
                if (publicValEvento[i] === false)
                {
                    //alert("ENTRA, camposEMpresa[i]: " + camposEmpresa[i]);
                    document.getElementById(camposEvento[i]).setAttribute("style", "border-color: red; border-width: 2px;");
                    document.getElementById("condiciones").checked = false;
                    document.getElementById("condiciones").disabled = true;
                    document.getElementById("registro").disabled = true;
                    auxSub = false;
                }
                else
                {
                    //alert("else");
                    //alert(auxSub + " 1");
                    document.getElementById(camposEvento[i]).setAttribute("style", "");
                }
            }
        }

    }
    //alert(auxSub);
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
    if (input !== "descripEmpresa" || input !== "descEvento" || input !== "descLargaEvento") {
        exp = /^([A-Z]{1}[a-zñáéíóú ]{2,40})+$/;
    }
    else {
        exp = /^([A-Z]{1}[a-zñáéíóú ]{200,1000})+$/;
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
    if (url === "/html/registroUsuario.html")
    {
        var email = $("#emailUsuario").val();
    }
    if (url === "/html/registroEmpresa.html")
    {
        var email = $("#emailEmpresa").val();
    }
    var exp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

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
    if (url === "/html/registroUsuario.html")
    {
        var telef = $("#telfUsuario").val();
    }
    if (url === "/html/registroEmpresa.html")
    {
        var telef = $("#telfEmpresa").val();
    }
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


function validaCIF() //EN PRUEBAS
{
    var CIF = $("#CIF").val();
    var exp = /(^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$/;

    if (CIF !== '' && CIF !== null)
    {
        if (exp.test(CIF))
        {
            return true;
        }
    }
    return false;
}

function validaDir()
{
    var dir = $("#dirEmpresa").val();
    var exp = /^([A-Za-z0-9ñáéíóú ]{8,40})+$/;

    if (dir !== '' && dir !== null)
    {
        if (exp.test(dir))
        {
            return true;
        }
    }
    return false;
}

function validaZip()
{
    var zip = $("#codEmpresa").val();
    var exp = /^([0-9]{5})+$/;

    if (zip !== '' && zip !== null)
    {
        if (exp.test(zip))
        {
            return true;
        }
    }
    return false;
}

function validaTipo()
{
    var tipo = $("#cantidad").val().trim();
    
    if(tipo !== '')
    {
        return true;
    }
    return false;
}

function validaCad()
{
    var cad = $("#caducidadEvento").val();
    
    if(cad !== '' && tipo !== null)
    {
        return true;
    }
    return false;
}

function validaPrecio(precio)
{
    var pre = $('#'+precio).val();
    var exp = /^([1-9]{1}[0-9]{0,2})$/;
    
    if(pre !== '' && pre !== null)
    {
        if(exp.test(pre))
        {
            return true;
        }
    }
    return false;
}

function validaFoto()
{
    var archivo = $("#fotoEvento").val();
    var extensiones = new Array(".jpg", ".png", ".jpeg");
    
    for(var i = 0 ; i< extensiones.length; i++)
    {
        if((archivo.substring(archivo.lastIndexOf("."))).toLowerCase() === extensiones[i])
        {
            return true;
        }
    }
    return false;
}
function ventanaConfirmacion(link) {
    
    var left = (screen.width/2)-(375/2); 
    var top = (screen.height/2)-(275/2);
    var nv = window.open(link, "nventana", "scrollbars=yes, top="+top+", left="+left+", height=275px, width=375px");
}


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


