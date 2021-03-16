const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// Función auxiliar para convertir un mensaje de error a un elemento HTML
// Si se usa mucho, sería aconsejable ponerla en un archivo común.
function getError(message) {
    return "<div class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" + message + "</div>";
}

// Obtenemos los datos de la foto que queremos modificar y los mostramos en el formulario
function loadPhoto() {
    axios.get('http://localhost:3000/photos/' + id)
        .then(function(response) {
            if (response.status === 200) {
                showPhoto(response.data);
            }
        })
        .catch(console.log);
}

// Función para mostrar los datos de la foto en el formulario cuando se haga la petición
function showPhoto(photo) {
    let date = new Date(photo.date);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let date_string = `${day}/${month}/${year}`;
    $("#date").text(date_string);

    $("#image").attr("src", photo.url);
    $("#title-input").val(photo.title);
    $("#description-input").val(photo.description);
    $("#tags-input").val(photo.tags.join(", "));
}



// Ejecutaremos loadPhoto cuando la página esté lista
$(loadPhoto);


$("form").submit(function(event) {
    event.preventDefault();
    $("#errors-container").empty();
    $.ajax({
        url: "http://localhost:3000/words/",
        success: comprobarpalabras,
        error: console.log,
    })
});


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
        let titulo = $("#title-input").val();
        let description = $("#description-input").val();
        let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
        let privacity = $("#seleccionprivacidad").val();


        if (title != "" && description != "") {

            photo = {
                title: titulo,
                description: description,
                privacidad: privacity,
                tags: tags,
            };

            fetch('http://localhost:3000/photos/' + id, {
                method: "PATCH",
                body: JSON.stringify(photo),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getToken(),
                }
            }).then(function(response) {
                if (response.ok) {
                    window.location.href = "index.php";
                } else {
                    $("#errors-container").append(getError("Tú no puedes editar esta foto"));
                }
            }).catch(console.log);
        } else {
            $("#errors-container").append(getError("no puedes dejar ningun campo vacío"));
        }
    }
}