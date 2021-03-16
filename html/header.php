<div class="title-block">
  <h1 id="title"><img src="../images/huella.png"  id="huella">Photofeed </h1>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      
      <a class="nav-link" href="perfil.php" id="enlace"><img src="../images/icono_user.png" class="icono"><h4 class="nombre nombreUsusario" ></h4></a>
      <h4 class="nombreUsusario" id="invitado"></h4>
      <form class="form-inline my-2 my-lg-0 izquierda">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      
      
       
      <ul class="navbar-nav ml-auto">
        
        <li class="nav-item">
          <a class="nav-link inicio"  href="index.php">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link login" href="login.php">Login</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDesplegableId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Trending
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="usuarios_trending.php">Usuarios trending</a>
            <a class="dropdown-item" href="fotos_trending.php">Fotos trending</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</div>

<hr>

<script>
let username= isLogged() ? localStorage.getItem("userName") : "Invitado";
$('.nombreUsusario').text(username);
if(isLogged()==false){
  $(enlace).remove();
}
else{
  $(invitado).remove();
}
</script>