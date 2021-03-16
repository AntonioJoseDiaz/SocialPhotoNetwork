const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('user2Id');

const PHOTOS_PER_ROW = 3;

function processPhotos(data) {
    console.log(data);
    let row = $("div.container > div.row").last();
    let counter = 0;




    for (photo of data) {
        if (photo.userId == id) {
            if (photo.privacidad == "publica") {
                let html = `<div class="col-md text-center">
                <br>
                <div class="">
                <br>
                <a href="photo_detail.php?photoId=${photo.id}">
                    <img src="${photo.url}" class="fotosmias">
                </a>
                
                    <h5>${photo.title}</h5>
                </div>
                </div>`;

                let col = $.parseHTML(html);
                row.append(col);


                console.log(counter);
                counter++;
                if (counter % PHOTOS_PER_ROW == 0) {
                    let new_row = $("<div></div>", { "class": "row" });
                    $("div.container").append(new_row);
                    $("div.container").append(new_row);
                    row = new_row;
                }
            }
        }

    }
    if (counter % PHOTOS_PER_ROW != 0) {
        let new_col = $("<div></div>", { "class": "col-md" });
        $(row).append(new_col);
        counter++;
    }
    if (counter % PHOTOS_PER_ROW != 0) {
        let new_col = $("<div></div>", { "class": "col-md" });
        $(row).append(new_col);
        counter++;
    }


}

function processUsers(data) {
    $("#nombreperfil").text(data.user);
    $("#nombre").text(data.name);
    $("#apellido").text(data.surname);
    $("#telefono").text(data.phone);
}



function loadPhotos() {
    console.log("Cargando fotos...");

    $.ajax({
        url: "http://localhost:3000/photos?userId=" + id + "&_sort=date&_order=desc",
        success: processPhotos,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });

}

function loadUser() {
    console.log("Cargando fotos...");

    $.ajax({
        url: "http://localhost:3000/users/" + id,
        success: processUsers,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });

}

// Llamar a loadPhotos cuando la página esté lista
$(loadPhotos);
$(loadUser);