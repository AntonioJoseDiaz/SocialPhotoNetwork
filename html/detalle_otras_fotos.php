<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Detalles foto</title>
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container contenedor">
    <div class="row">
      <div class="col-md text-center">
        <h1>Detalle de foto</h1>
      </div>
    </div>

    <hr>

    <div class="row">

      <div class="col-md text-center">
        <div class="row"><h2><img src="../images/icono_user.png" class="icono2">Javiirj</h2></div>
        <div class="row"><p></p></div>
        <div class="row">
          <div class="col text-center">
        <img id="image" src="../images/11.jpg" class="img-fluid"></div>
        </div>
      </div>

      <div class="col-md text-center">
        <h2 id="image-title">Titulo</h2>
        <h4 id="image-date">fecha</h4>
        <span id="image-desc"><h5>Descripción</h5></span>
        <ul><h5 id="comments">Comentarios</h5>
        
        </ul>

        <hr>

        <h3 id="image-score">Puntuacion: Y</h3>
        <button type="button" class="btn btn-success">Me gusta</button>
        <button type="button" class="btn btn-danger">No me gusta</button>

        <hr>

        <h3>Etiquetas:</h3>

        <div id="image-tags">
            <span class="badge badge-primary">Paisajes</span>
            <span class="badge badge-primary">Cielo</span>
        </div>
        

        <hr>

        <h3>Acciones:</h3>

        <a href="añadir_comentario.php"><button type="button" class="btn btn-outline-primary">Añadir comentario</button></a>
      </div>

    </div>

    <hr>

    

  </div>

  <?php include 'footer.php' ?>
  <script src="js/photoDetail.js"></script>
</body>

</html>