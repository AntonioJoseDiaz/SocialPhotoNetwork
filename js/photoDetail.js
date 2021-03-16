const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('photoId');


function editPhoto() {
    window.location.href = "editar_foto.php?id=" + id;
}
///////////////////////////////////////////////////////////////////////////////////////
function añadirVoto(data) {
    let fotos = data.photoLiked;
    fotos.push(id);
    user = {
        "photoLiked": fotos,
    };
    fetch('http://localhost:3000/users/' + localStorage.getItem("userId"), {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        }
    });
}

function añadirVotoNeg(data) {
    let fotos = data.photoDisliked;
    fotos.push(id);
    user = {
        "photoDisliked": fotos,
    };
    fetch('http://localhost:3000/users/' + localStorage.getItem("userId"), {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        }
    });
}
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////         CAMBIAR LOS VOTOS
///////////////////////////////////////////////////////////////////////////////////////
function CambiarVotoPos(data) {
    let fotopos = data.photoLiked;
    fotopos.push(id);
    let fotos = data.photoDisliked;
    for (ids of fotos) {
        if (ids == id) {
            let index = fotos.indexOf(ids);
            fotos.splice(index, 1);
        }
    }
    user = {
        "photoLiked": fotopos,
        "photoDisliked": fotos,
    };
    fetch('http://localhost:3000/users/' + localStorage.getItem("userId"), {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        }
    });
}

/////////

function CambiarVotoNeg(data) {
    let fotosneg = data.photoDisliked;
    fotosneg.push(id);
    let fotos = data.photoLiked;
    for (ids of fotos) {
        if (ids == id) {
            let index = fotos.indexOf(ids);
            fotos.splice(index, 1);
        }
    }
    user = {
        "photoLiked": fotos,
        "photoDisliked": fotosneg,
    };
    fetch('http://localhost:3000/users/' + localStorage.getItem("userId"), {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        }
    });
}
///////////////////////////////////////////////////////////
/////////////////////////////////                  VOTAR
///////////////////////////////////////////////////////////
function votoPositivo() {
    $.ajax({
        url: "http://localhost:3000/photos/" + id,
        success: votoPos,
        error: console.log,
    });

}

function votoNegativo() {
    $.ajax({
        url: "http://localhost:3000/photos/" + id,
        success: votoNeg,
        error: console.log,
    });

}

function votoPos(data) {
    if ($("#botonneg").prop("disabled")) {
        let upvote = data.upvotes + 1;
        let downvote = data.downvotes - 1;
        photo = {
            "upvotes": upvote,
            "downvotes": downvote,
        };
        let score = upvote - downvote;
        let score_text = "Puntuación: " + score;
        $("#image-score").text(score_text);
        $("#botonpos").attr("disabled", true);
        $("#botonneg").removeAttr("disabled");
        fetch('http://localhost:3000/photos/' + id, {
            method: "PATCH",
            body: JSON.stringify(photo),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (!response.ok) {
                $("#errors-container").append(getError(response.statusText));
            }
        }).catch(console.log);
        $.ajax({
            url: "http://localhost:3000/users/" + localStorage.getItem("userId"),
            success: CambiarVotoPos,
            error: console.log,
        });
    } else {

        let upvote = data.upvotes + 1;
        photo = {
            "upvotes": upvote,
        };
        let score = upvote - data.downvotes;
        let score_text = "Puntuación: " + score;
        $("#image-score").text(score_text);
        $("#botonpos").attr("disabled", true);

        $.ajax({
            url: "http://localhost:3000/users/" + localStorage.getItem("userId"),
            success: añadirVoto,
            error: console.log,
        });

        fetch('http://localhost:3000/photos/' + id, {
            method: "PATCH",
            body: JSON.stringify(photo),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (!response.ok) {
                $("#errors-container").append(getError(response.statusText));
            }
        }).catch(console.log);
    }
}

function votoNeg(data) {
    if ($("#botonpos").prop("disabled")) {
        let downvote = data.downvotes + 1;
        let upvote = data.upvotes - 1;
        photo = {
            "upvotes": upvote,
            "downvotes": downvote,
        };
        let score = upvote - downvote;
        let score_text = "Puntuación: " + score;
        $("#image-score").text(score_text);
        $("#botonneg").attr("disabled", true);
        $("#botonpos").removeAttr("disabled");
        fetch('http://localhost:3000/photos/' + id, {
            method: "PATCH",
            body: JSON.stringify(photo),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (!response.ok) {
                $("#errors-container").append(getError(response.statusText));
            }
        }).catch(console.log);
        $.ajax({
            url: "http://localhost:3000/users/" + localStorage.getItem("userId"),
            success: CambiarVotoNeg,
            error: console.log,
        });
    } else {
        let downvote = data.downvotes + 1;
        photo = {
            "downvotes": downvote,
        };
        let score = data.upvotes - downvote;
        let score_text = "Puntuación: " + score;
        $("#image-score").text(score_text);
        $("#botonneg").attr("disabled", true);

        $.ajax({
            url: "http://localhost:3000/users/" + localStorage.getItem("userId"),
            success: añadirVotoNeg,
            error: console.log,
        });


        fetch('http://localhost:3000/photos/' + id, {
            method: "PATCH",
            body: JSON.stringify(photo),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (response.ok) {
                window.location.href = "photo_detail.php?photoId=" + id;
            } else {
                $("#errors-container").append(getError(response.statusText));
            }
        }).catch(console.log);
    }
}

////////////////////////////////////////////////////////////
////////////////////////           BORRAR FOTOS
////////////////////////////////////////////////////////////
function deletePhoto() {
    $.ajax({
        url: "http://localhost:3000/users/",
        success: eliminarVotos,
        error: console.log,
    });
    fetch('http://localhost:3000/photos/' + id, {
        method: "DELETE",
        headers: {
            'Authorization': 'Bearer ' + getToken(),
        }
    }).then(function(response) {
        if (response.ok) {
            window.location.href = "index.php";
        } else {
            console.log("Error al borrar la foto: " + response.statusText);
        }
    }).catch(function(error) {
        console.log("Error al borrar la foto: " + error);
    });
}
////////////////////////////////////////////////////////////////////////
/////////////////         ELIMINAR TODOS LOS VOTOS ASOCIADOS A ESA FOTO
////////////////////////////////////////////////////////////////////////
function eliminarVotos(data) {
    for (user of data) {
        let idUser = user.id;
        let fotodis = user.photoDisliked;

        for (ids of fotodis) {
            if (ids == id) {
                let index = fotodis.indexOf(ids);
                fotodis.splice(index, 1);
            }
        }
        let fotolik = user.photoLiked;
        for (ids of fotolik) {
            if (ids == id) {
                let index = fotolik.indexOf(ids);
                fotolik.splice(index, 1);
            }
        }
        usuario = {
            "photoLiked": fotolik,
            "photoDisliked": fotodis,
        };
        fetch('http://localhost:3000/users/' + idUser, {
            method: "PATCH",
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken(),
            }
        }).then(function(response) {
            if (response.ok) {
                console.log("Usuario edtado: ");
            } else {
                console.log("Error al borrar la foto: " + response.statusText);
            }
        })
    }
}

////////////////////////////////////
function processPhotoLoad(data) {
    $("#nombrePropietario").text(data.userName);
    $("#image").attr("src", data.url);
    $("#image-title").text(data.title);
    $("#image-desc").text(data.description);

    let photo_date = data.date;
    let date = new Date(photo_date);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    //let date_string = "Fecha: " + day + "/" + month + "/" + year;
    let date_string = `Fecha: ${day}/${month}/${year}`;
    $("#image-date").text(date_string);

    for (tag of data.tags) {
        let span = $("<span></span>", {
            text: tag,
            "class": "badge badge-primary"
        });

        $("#image-tags").append(span);
    }
    $("span.badge").after(" ");

    let score = data.upvotes - data.downvotes;
    let score_text = "Puntuación: " + score;
    $("#image-score").text(score_text);
    if ((isLogged() == false) || (data.userId != localStorage.getItem("userId"))) {
        $("#actions").remove();
    }
    if (isLogged() == false) {
        $("#botonneg").attr("disabled", true);
        $("#botonpos").attr("disabled", true);
    }
    $.ajax({
        url: "http://localhost:3000/users/" + localStorage.getItem("userId"),
        success: usuarioVota,
        error: console.log,
    });

}
/////////////////////////////////////////////////////
/////////////         AQUI PARA BLOQUEAR LOS BOTONES
/////////////////////////////////////////////////////
function usuarioVota(user) {
    for (tag of user.photoLiked) {
        if (tag == id) {
            $("#botonpos").attr("disabled", true);
        }
    }
    for (tag of user.photoDisliked) {
        if (tag == id) {
            $("#botonneg").attr("disabled", true);
        }
    }
}


function loadPhoto() {

    if (id === null) {
        alert("Please provide a photo ID");
    } else {
        $.ajax({
            url: "http://localhost:3000/photos/" + id,
            success: processPhotoLoad,
            error: console.log,
        });
    }

}

$(loadPhoto); // Cargar la foto cuando la página esté lista