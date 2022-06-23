<template>
<div class="row">
<div class="col-md-30">
<table class="table table-striped ">
<thead class="thead-dark bg-primary text-light">
         <tr>
                    <th> couverture</th>
                    <th>Titre</th>
                    <th>Edition</th>
                    <th>Auteur</th>
                    <th>Prix</th>
                    <th>Disponible</th>
                    <th>Categorie</th>
        </tr>
     </thead>
     <tbody> 
        <tr>
             <td class="col"><span v-if="liv.image.indexOf('.')>-1"><img
                    :src="require(`../assets/images/${liv.image}`)" :alt="liv.titre"
                    width="70"></span></td>
            <td>{{ liv.titre }} </td>
            <td>{{liv.isbn}}</td>
          <td>  {{ liv.maisonedition }} 
         {{liv.annedition}}</td>
         <td> {{liv.auteur}} </td>
               <td>{{liv.prix}}</td>
                    <td>{{liv.qtestock}}</td>
                    <td>{{liv.categorie}}</td>
        </tr>
     </tbody>
     </table>
</div></div>
</template>
<script>
import ProductService from "../services/LivreService.js";
export default {
data() {
return {
Liv: {}
}
},
created() {
        ProductService.getOne(this.$route.params.id).then(res => {
this.liv= res.data;
}).catch(error => {
console.log(error)
});
},
}
</script>
