<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Registro</title>
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container contenedor">

    <div class="row">
      <div class="col-md text-center">
        <h3>Registro de usuario</h3>
      </div>
    </div>

    <hr>

    <div id="error_container">
    </div>

    <form onsubmit="return validateForm()">
      <div class="row">
        <div class="col-md">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" id="nombres" name="nombre" placeholder="Nombre">
          </div>
          <div id="nombreError"></div>
        </div>

        <div class="col-md">
          <div class="form-group">
            <label for="apellidos">Apellidos:</label>
            <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Apellidos">
          </div>
          <div id="apellidoError"></div>
        </div>
      </div>

      


      <div class="row">
        <div class="col-md">
          <div class="form-group">
            <label for="telefono">Teléfono:</label>
            <input type="telephone" class="form-control" id="telefonos" name="telefono" placeholder="Teléfono">
          </div>
          <div id="telefonoError"></div>
        </div>

        <div class="col-md">
          <div class="form-group" id="email">
            <label for="email">Email:</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="email" class="form-control" id="emails" name="email" placeholder="Email">
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md">
          <div class="form-group">
            <label for="usuario">Usuario:</label>
            <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Usuario">
          </div>
        </div>

        <div class="col-md">
          <div class="form-group">
            <label for="password1">Contraseña:</label>
            <input type="password" class="form-control" id="password1" name="password1" placeholder="Contraseña">
          </div>
        </div>

        <div class="col-md">
          <div class="form-group" id="contraseña">
            <label for="password2">Repita su contraseña:</label>
            <input type="password" class="form-control" id="password2" name="password2" placeholder="Repita contraseña">
          </div>
          <div id="contraseñaError">

          </div>
        </div>
      </div>

      


      <div class="row">
        <div class="col-md text-center">
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </div>
      </div>
      <br>
    </form>

  </div>

  <?php include 'footer.php' ?>
  <script src="../js/register.js"></script>

</body>

</html>