<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Editar foto</title>
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container contenedor">
    <div class="row">
      <div class="col-md text-center">
        <h3>Detalle de foto</h3>
      </div>
    </div>

    <hr>
    <form>
      <div class="row">
        <div class="col-md" id="errors-container">
        </div>
      </div>
      <div class="row">
        <div class="col-md text-center">
          <img id="image" class="img-fluid">
        </div>
        <div class="col-md text-center">
          <h5>Título:</h5>
          <input type="text" class="form-control" id="title-input" name="title" placeholder="Título">
          <div id="title_error">
          </div>
          <h5>Fecha: <span id="date"></span></h5>
            <br>
          <span>Descripción de la imagen:</span>
          <textarea class="form-control" id="description-input" name="description"></textarea>
          <div id="descripcion_error">
          </div>
            <br>
          <h3>Etiquetas:</h3>
          <input type="text" class="form-control" id="tags-input" name="tags">
            <hr>
          <h5>Visibilidad: </h5>
          <select id="seleccionprivacidad">
            <option value="publica">Pública</option>
            <option value="privada">Privada</option>
          </select>
        
        </div>
      </div>
            <br>
      <div class="row">
        <div class="col-md text-center">
          <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
      </div>
    </form>
    <br>


  </div>

  <?php include 'footer.php' ?>
  <script src="../js/editPhoto.js"></script>
</body>

</html>