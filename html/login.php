<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Login</title>
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container caja">

    <div class="row">
      <div class="col-md text-center">
        <h3>Iniciar sesión</h3>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-md" id="errors-container">
      </div>
    </div>


    <form onsubmit="return validateForm()">
      
        

    <div class="row">
        <div class="col-md text-center">
        <div class="form-group">
          <label for="email">Email:</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="email" required class="form-control" id="email" name="email
              " placeholder="Email">
            </div>
          </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md text-center">
          <div class="form-group">
            <label for="password1">Contraseña:</label>
            <input type="password" required class="form-control" id="password" name="password" placeholder="Contraseña">
          </div>
        </div>

    </div>
    <br>

    <div class="row">
        <div class="col-md text-center">
          <button type="submit" class="btn btn-primary" ><h7>Login</h7></button>
        </div>
        <div class="col-md text-center">
        <a href="register.php">Crear cuenta</a>
        </div>
    </div>
  <br>
    </form>

  </div>

  <?php include 'footer.php' ?>
  <script src="../js/login.js"></script>

</body>

</html>