<template>
<div class="row">
    <div class="col-md-12" style="display:flex;flex-wrap:wrap;justify-content:center">
  <div v-for="liv in livres" :key="liv.id">
  <div class="card" style="width: 12rem;margin:12px;"> 
   <img :src="require(`../assets/images/${liv.image}`)" class="card-img-top"  alt="" />
    </div>
    <div class="card-body">
         {{liv.auteur}}
        
    <div class="card-footer">
      <small class="text-muted">
     {{liv.prix}} DT
     <a href="#" class="btn btn-primary">+</a>
    </small>
    </div></div>
</div>
 </div>
  </div>
</template>
<script>
import ProductService from "../services/LivreService.js";
export default {
    data() {
        return {
            livres:[]
        }
    },
    created() {
        ProductService.getAll()
        .then(res => {
            this.livres = res.data;
        })
        .catch(error => {
            console.log(error)
        });

    },    
}
</script>
<style>
.card-img-top {
    width: 180px;
    height: 250px;
    object-fit: cover;
}
</style>