function validar_formulario(elemento) {
    let aprobado = false;

    if (elemento == 'nombre') {
        aprobado = validar_nombre_asunto('nombre');
        if (aprobado == true)
            aprobado = validarEmail();
        if (aprobado == true)
            aprobado = validar_nombre_asunto('asunto');
        if (aprobado == true)
            aprobado = validar_mensaje();
    }
    if (elemento == 'asunto') {
        aprobado = validar_nombre_asunto('asunto');
        if (aprobado == true)
            aprobado = validar_mensaje();
        if (aprobado == true)
            aprobado = validar_nombre_asunto('nombre');
        if (aprobado == true)
            aprobado = validarEmail();
    }
    if (elemento == 'email') {
        aprobado = validarEmail();
        if (aprobado == true)
            aprobado = validar_nombre_asunto('asunto');
        if (aprobado == true)
            aprobado = validar_mensaje();
        if (aprobado == true)
            aprobado = validar_nombre_asunto('nombre');
    } if (elemento == 'mensaje') {
        aprobado = validar_mensaje();
        if (aprobado == true)
            aprobado = validar_nombre_asunto('nombre');
        if (aprobado == true)
            aprobado = validarEmail();
        if (aprobado == true)
            aprobado = validar_nombre_asunto('asunto');
    }
    document.getElementById('enviar').disabled = !aprobado;

}

function validar(elemento) {
    let valor = document.getElementById(elemento).value;
    if (valor == "") {
        document.getElementById(elemento + '_error').innerHTML = "*Ingrese su " + elemento;
    }
    else {
        document.getElementById(elemento + '_error').innerHTML = "";
    }
}

function validarEmail() {
    let email = document.getElementById('email').value;


    if (!email.includes('@')) {
        console.log("No tiene arrona");
        document.getElementById('email_error').innerHTML = "El correo debe contener el carácter '@'.";
        return false;
    }

    // Verificar que haya una parte antes y después del '@'
    else {
        console.log("Contiene arrobba");
        const partes = email.split('@');
        // console.log(partes);
        const dominioPartes = partes[1].split('.');

        if (partes.length !== 2 || partes[0] === '' || partes[1] === '') {
            document.getElementById('email_error').innerHTML = "*Debe tener texto antes y después del '@'.";
            return false;
        }

        // Verificar que la parte después del '@' contenga un punto '.'
        else if (!partes[1].includes('.')) {
            document.getElementById('email_error').innerHTML = "El dominio debe contener un punto '.' después del '@'.";
            return false;
        }

        // Verificar que haya texto después del último punto en el dominio
        else if (dominioPartes[dominioPartes.length - 1].length < 2) {
            document.getElementById('email_error').innerHTML = "La extensión del dominio debe tener al menos 2 caracteres.";
            return false;
        }

        else document.getElementById('email_error').innerHTML = ""; // Retorna vacío si el correo es válido
        return true;
    }
}

function validar_nombre_asunto(elemento) {
    let valor = document.getElementById(elemento).value;

    // Validar si el nombre está escrito y es valido
    if (valor.length < 3) {
        document.getElementById(elemento + '_error').innerHTML = "*El " + elemento + " debe tener al menos 3 caracteres";
        return false;

    }
    // Validar que el nombre tenga menos de 50 caracteres
    else if (valor.length > 50) {
        document.getElementById(elemento + '_error').innerHTML = "*El " + elemento + " debe tener menos de 50 caracteres";
        return false;
    } else {
        document.getElementById(elemento + '_error').innerHTML = "";
        return true;
    }

}

function validar_mensaje() {
    let valor = document.getElementById('mensaje').value;
    if (valor.length < 3) {
        document.getElementById('mensaje_error').innerHTML = "*El mensaje debe tener al menos 3 caracteres";
        return false;
    }
    // Validar que el nombre tenga menos de 50 caracteres
    else if (valor.length > 300) {
        document.getElementById('mensaje_error').innerHTML = "*El mensaje debe tener menos de 300 caracteres";
        return false;
    } else {
        document.getElementById('mensaje_error').innerHTML = "";
        return true;
    }
}

function enviar_mensaje() {
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;
    let email = document.getElementById('email').value;

    alert("Se envió su mensaje");
}

// function copiar(texto) {
//     navigator.clipboard.writeText(texto).then(function () {
//         alert("Se copió:" + texto);
//     }, function (err) {
//         console.error("Error al copiar", err);
//     });
// }

// function copiar(text) {
//     const textarea = document.createElement('textarea');
//     textarea.value = text;
//     document.body.appendChild(textarea);
//     textarea.select();
//     try {
//         navigator.clipboard.writeText(text).then(function () {
//             alert('Texto copiado: ' + text);
//         }).catch(function (err) {
//             console.error('Error al copiar con la API moderna: ', err);
//             document.execCommand('copy');
//             alert('Texto copiado: ' + text);
//         });
//     } catch (err) {
//         console.error('Error al copiar: ', err);
//     } finally {
//         document.body.removeChild(textarea);
//     }
// }

function copiar(resultado) {
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = resultado;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Se copió " + resultado);
}