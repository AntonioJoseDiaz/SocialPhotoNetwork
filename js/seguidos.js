const PHOTOS_PER_ROW = 2;

function processUsers(data) {
    console.log(data);
    let row = $("div.container > div.row").last();
    let counter = 0;

    for (user of data) {
        if (user.id != localStorage.getItem("userId")) {
            let html = `<div class="col-md text-center">
        <br>
        <div class="">
        <br>
          <a href="perfil_otros_usuarios.php?user2Id=${user.id}">
          <h5>${user.user}</h5>
          </a>
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
    if (counter % PHOTOS_PER_ROW != 0) {
        let new_col = $("<div></div>", { "class": "col-md" });
        $(row).append(new_col);
        counter++;
    }

}





function loadUsers() {
    console.log("Cargando usuarios...");

    $.ajax({
        url: "http://localhost:3000/users?_sort=id&_order=desc",
        success: processUsers,
        error: function(error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });

}

// Llamar a loadPhotos cuando la página esté lista
$(loadUsers);