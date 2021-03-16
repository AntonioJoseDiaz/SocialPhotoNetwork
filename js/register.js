function validateForm() {
    $("#error_container").empty();
    $("#nombreError").empty();
    $("#apellidoError").empty();
    $("#telefonoError").empty();
    $("#contraseñaError").empty();

    let errorCounter = 0;

    let nombre = $("#nombres").val();
    let apellidos = $("#apellidos").val();
    let telefono = $("#telefonos").val();
    let email = $("#emails").val();
    let usuario = $("#usuario").val();
    let password1 = $("#password1").val();
    let password2 = $("#password2").val();
    let mapa = new Array();

    if (nombre.trim().length < 3) {
        $("#nombreError").append(
            getError("El nombre debe tener al menos 3 caracteres de longitud")
        );
        errorCounter++;
    }

    if (apellidos.trim().length < 3) {
        $("#apellidoError").append(
            getError("Los apellidos deben tener al menos 3 caracteres de longitud")
        );
        errorCounter++;
    }

    if (!new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$").test(telefono)) {
        $("#telefonoError").append(getError("El telefono esta mal formateado"));
        errorCounter++;
    }

    if (password1 != password2) {
        $("#contraseñaError").append(
            getError("Las contraseñas deben ser iguales")
        );
        errorCounter++;
    }

    if (errorCounter === 0) {
        let user = {
            name: nombre,
            surname: apellidos,
            phone: telefono,
            email: email,
            password: password1,
            photoLiked: mapa,
            photoDisliked: mapa,
            user: usuario
        };

        $.ajax({
            url: "http://localhost:3000/register",
            method: "POST",
            data: JSON.stringify(user),
            contentType: "application/json",
            success: handleRegister,
            error: function(xhr, ajaxOptions, thrownError) {
                $("#error_container").append(getError(xhr.responseJSON));
            },
        });
    }

    return false;
}

function handleRegister(data) {
    let token = data.accessToken;
    saveToken(token).then(function() {

        window.location.href = "index.php";

    });
}

///////////////////////////////////////////////////////////////////////////////



function getError(message) {
    return (
        "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" +
        message +
        "</div>"
    );
}


function removeError(error) {
    $(error).remove();
}

$(document).ready(function() {
    $("#nombre").change(function() {
        input = $(this);
        if (input.val().length < 3) {
            input.removeClass("is-valid");
            input.addClass("is-invalid");
        } else {
            input.removeClass("is-invalid");
            input.addClass("is-valid");
        }
    });
});