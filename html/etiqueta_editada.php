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

    <div class="row">

      <div class="col-md text-center">
        <img id="image" src="../images/27.jpg" class="img-fluid">
      </div>

      <div class="col-md text-center">
        <h2 id="image-title">Titulo <button type="button" class="btn btn-outline-danger">Editar</button> </h2>
        <h5 id="image-date">descripcion <button type="button" class="btn btn-outline-danger">Editar</button></h5>
        <span id="image-desc"></span>

        <hr>

        <h3>Etiquetas:</h3>

        <div id="image-tags">
            <span class="badge badge-primary">Paisajes</span>
            <span class="badge badge-primary">Cambiada</span>
            
            
        </div>
        

        <hr>

        <h3>Acciones:</h3>

        
        <a href="editar_foto.php"><button type="button" class="btn btn-outline-primary">Editar etiqueta</button></a>
        <button type="button" class="btn btn-outline-danger">Borrar etiqueta</button>
        <button type="button" class="btn btn-outline-success">Añadir etiqueta</button>
      </div>

    </div>

    <hr>

    

  </div>

  <?php include 'footer.php' ?>
  <script src="js/photoDetail.js"></script>
</body>

</html>