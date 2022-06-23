<!--
<template>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div v-for="liv in Livres" :key="liv.id"> 
    <div class="carousel-item">
   <img :src="require(`../assets/images/${liv.image}`)" class="card-img-top h-75"  alt="" />
    </div>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
</template>
<script>
import ProductService from "../services/LivreService.js";
export default {
data() {
return {
Livres: []
}
},
  created(){
    ProductService.getAll().then((response)=>
    {
      this.Livres = response.data;
    })
        .catch(error => {
            console.log(error)
        });
  },
}
</script> -->