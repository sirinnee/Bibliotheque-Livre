<template>
  <nav class="navbar navbar-warning text-light bg-warning justify-content-between flexnowrap flex-row" style="">
    <div class="container">
        <router-link class="navbar-brand  btn text-light bg-warning " to="/"  style="background-color: transparent">
          Bibliothéque</router-link>
      <ul class="nav navbar-nav flex-row center-right">
        <li class="nav-item">
          <router-link class="navbar-brand float-center btn text-light bg-warning " to="/" style="background-color: transparent" >
            Les Livres
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand float-center btn text-light bg-warning " to="/datatableLivre" style="background-color: transparent">
            DataTable
          </router-link>
        </li>
         <li class="nav-item">
          <router-link class="navbar-brand float-center btn text-light bg-warning " to="/caroussel" style="background-color: transparent" >
            Caroussel
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Card" class="navbar-brand float-left btn text-light bg-warning " style="background-color: transparent">
            Card
          </router-link>
        </li>
        <li class="nav-item">
        </li>
             <li class="nav-item">
          <router-link class="navbar-brand float-center btn text-light bg-warning " to="/add" style="background-color: transparent">
            Ajouter Un Livres
          </router-link>
        </li> 
        <li class="nav-item">
          <router-link to="/auteur" class="navbar-brand float-left btn text-light bg-warning " style="background-color: transparent">
             Les Auteur
          </router-link>
        </li>
             
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style>
 .navbar {
  min-height: 80px;
}
.navbar-brand {
  padding: 0 15px;
  height: 40px;
  line-height: 50px;
}
</style>
