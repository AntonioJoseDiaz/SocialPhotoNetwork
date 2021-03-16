<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Añadir foto</title>
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container contenedor">
    <div class="row">
      <div class="col-md text-center">
        <h3>Añadir foto</h3>
      </div>
    </div>

    <br>
    <hr>
    <div class="row">
      <div class="col-md" id="errors-container">
      </div>
    </div>
    

    <form>
    <div class="row">

      <div class="col-md text-center">
        <div class="form-group">
          <label for="url-input">URL:</label>
          <input type="text" class="form-control" id="url-input" name="url" placeholder="URL">
        </div>
        
        <div> <h5>Visibilidad: </h5>
          <select id="seleccionprivacidad">
            <option value="publica">Pública</option>
            <option value="privada">Privada</option>
          </select>
        </div>
      </div>

      <div class="col-md text-center">
        <div class="form-group">
          <label for="title-input"><h5>Título:</h5></label>
          <input type="text" class="form-control" id="title-input" name="title" placeholder="Título">
          <div id="title_error">
          </div>
        </div>
        
        <div class="form-group">
          <label for="description-input"><h5>Descripción:</h5></label>
          <textarea class="form-control" id="description-input" name="description"
              placeholder="Descripción"></textarea>
          <div id="descripcion_error">
          </div>
        </div>
        <span id="image-desc"></span>

        <hr>
        <div class="form-group">
          <label for="tags-input"><h5>Etiquetas (separadas por comas):</h5></label>
          <input type="text" class="form-control" id="tags-input" name="tags"
              placeholder="animales, paisaje, comida">
        </div>
      </div>
    </div>

    <br>

    <div class="row">
      <div class="col-md text-center">
        <button type="submit"  class="btn btn-primary">Subir foto</button>
      </div>
    </div>
    <br>
    </form>
  </div>

  <?php include 'footer.php' ?>
  <script src="../js/createPhoto.js"></script>
</body>

</html>