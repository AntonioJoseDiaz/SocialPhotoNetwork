let limite = 50;
let LimiteTitulo = 42;

function getError(message) {
    return "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" + message + "</div>";
}

function comprobarpalabras(data) {
    let errors = 0;
    let title = $("#title-input").val().split(" ").map(algo => algo.trim());
    let description = $("#description-input").val().split(" ").map(algo => algo.trim());

    for (word of data) {
        for (algo of description) {
            if (algo == word.palabra) {
                $("#descripcion_error").append(getError("No puedes poner " + algo + " en la descripción"));
                errors++;
            }
        }
        for (algo of title) {
            if (algo == word.palabra) {
                $("#title_error").append(getError("No puedes poner " + algo + " en el titulo"));
                errors++;
            }
        }
    }
    if (errors == 0) {
        let url = $("#url-input").val();
        let title = $("#title-input").val();
        let description = $("#description-input").val();
        let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
        let date = new Date().toISOString();
        let privacity = $("#seleccionprivacidad").val();
        if (title.length > LimiteTitulo) {
            $("#errors-container").append(getError("El titulo no puede tener mas de " + LimiteTitulo + " palabras"));
        }
        if (url == "") {
            $("#errors-container").append(getError("Debes añadir una URL"));
        }
        if (title == "" || description == "") {
            $("#errors-container").append(getError("No puedes dejar ningún campo vacío"));
        }
        if (url != "" && title != "" && description != "" && title.length <= LimiteTitulo) {
            photo = {
                "url": url,
                "title": title,
                "description": description,
                "tags": tags,
                "date": date,
                "upvotes": 0,
                "downvotes": 0,
                "privacidad": privacity,
                "userId": localStorage.getItem("userId"),
                "userName": localStorage.getItem("userName"),
            };

            fetch("http://localhost:3000/photos/", {
                method: "POST",
                body: JSON.stringify(photo),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getToken(),
                }
            }).then(function(response) {
                if (response.ok) {
                    window.location.href = "index.php";
                }
            }).catch(console.log);
        }
    }
}

function añadirFoto(data) {
    if (isLogged() == false) {
        $("#errors-container").append(getError("Para subir una foto debe iniciar sesión"));
    } else {
        let counter = 0;
        for (photo of data) {
            if (photo.userId == localStorage.getItem("userId")) {
                counter++;
            }
        }
        if (counter < limite) {
            $.ajax({
                url: "http://localhost:3000/words/",
                success: comprobarpalabras,
                error: console.log,
            })
        } else {
            $("#errors-container").append(getError("No puedes subir mas de " + limite + " fotos, borra alguna"));
        }
    }
}
$("form").submit(function(event) {

    event.preventDefault();
    $("#errors-container").empty();
    $.ajax({
        url: "http://localhost:3000/photos/",
        success: añadirFoto,
        error: console.log,
    })

});