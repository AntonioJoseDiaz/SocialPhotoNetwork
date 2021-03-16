function validateForm() {
    let email = $("#email").val();
    let password = $("#password").val();

    // Hay que validar este formulario como cualquier otro!!!

    let login_data = {
        email,
        password,
    };

    $.ajax({
        url: "http://localhost:3000/login",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(login_data),

        success: handleLogin,
        error: console.log, // Hay que gestionar este posible error en el login y mostrárselo al usuario
    });

    return false;
}

function handleLogin(data) {
    let token = data.accessToken;
    saveToken(token).then(function() {
        window.location.href = "index.php";
    });
}

function removeError(error) {
    $(error).remove();
}

function getError(message) {
    return (
        "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" +
        message +
        "</div>"
    );
}
$("form").submit(function(event) {
    event.preventDefault();
    $("#errors-container").empty();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let login = {
            "email": email,
            "password": password
        }
        // Aquí hacemos el envío de los datos de login
    fetch('http://localhost:3000/login/', {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            response.json().then(function(token) {
                storeToken(token.accessToken);
                window.location.href = "index.php";
            }).catch(function(error) {
                $("#errors-container").append(getError("Error durante la autenticación. Por favor, vuelva a enviar los mismos datos "));
            });
        } else {
            $("#errors-container").append(getError("Datos de autenticación incorrectos"));
        }
    }).catch(function(error) {
        console.log("Error al enviar los datos: " + error);
    });
});