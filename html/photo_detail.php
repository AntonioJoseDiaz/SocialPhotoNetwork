<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Detalles foto</title>
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container contenedor">
    <br>

    <div class="row">

      <div class="col-md text-center">
        <div class="row"><img src="../images/icono_user.png" class="icono2"><h2 class="perfilname" id="nombrePropietario"></h2></div>
        <div class="row"><p></p></div>
        <div class="row">
          <div class="col text-center">
        <img id="image" src="" class="img-fluid"></div>
        </div>
      </div>

      <div class="col-md text-center">
      <br>
        <h2 id="image-title"></h2>
        <br>
        <br>
        <h4 id="image-date"></h4>
        <br>
        <br>
        <span id="image-desc"></span>
        <ul><h5 id="comments"></h5>
        
        </ul>
        <hr>
        <br>
        <h3 id="image-score"> </h3>
        <div id="votar">
          <button onclick='votoPositivo()' type="submit" class="btn btn-success" id="botonpos">Me gusta</button>
          <button onclick='votoNegativo()' type="submit" class="btn btn-danger" id="botonneg">No me gusta</button>
        </div>
        <hr>
        <br>
        <h3>Etiquetas:</h3>
        <div id="image-tags">
        </div>
        <hr>
        <div id="actions">
            
        
        <h3>Acciones:</h3>

        <button onclick='editPhoto()' type="submit" class="btn btn-outline-primary">Editar foto</button>
        <button onclick='deletePhoto()' type="button" class="btn btn-outline-danger">Borrar foto</button>
        </div>
      </div>

    </div>

    <hr>

    

  </div>

  <?php include 'footer.php' ?>
  <script src="../js/photoDetail.js"></script>
</body>

</html>
