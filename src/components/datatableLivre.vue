<template>
  <div>
      <table class="table" id="datatable">
        <thead>
          <tr>
              <th>couverture</th>
            <th>Titre</th>
            <th>  Edition  </th>
            <th>Auteur</th>
            <th>Prix</th>
             <th>Quantité Disponible</th>
             <th></th> 
             <th></th>            
          </tr>
        </thead>
        <tbody>
          <tr v-for="liv in Livres" :key="liv.id">
              <td class="col"><span v-if="liv.image.indexOf('.')>-1"><img
                    :src="require(`../assets/images/${liv.image}`)" :alt="liv.titre"
                    width="70"></span></td>
<td>{{ liv.titre }}</td>
<td>{{ liv.maisonedition }}{{liv.annedition}}</td>
<td> <router-link :to="{name: 'oneauteur', params: {AT: liv.auteur }}" class=" btn" style="background-color:transparent">{{ liv.auteur }}
</router-link> 
</td>
<td>{{liv.prix}}</td>
<td>{{liv.qtestock}}</td>
<td>
<router-link :to="{name: 'Modification', params: {
id: liv.id }}" class="btn btn-info btn-block">   Modifier
</router-link></td>
<td>
<button @click.prevent="deleteLivre(liv.id)"
class="btn btn-warning btn-block">Supprimer</button>
</td>
          </tr>
        </tbody>
      </table>    
  </div>
</template>
<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import ProductService from "../services/LivreService.js";
import $ from 'jquery'; 
export default {
data() {
return {
Livres: []
}
},
  mounted(){
    ProductService.getAll().then((response)=>
    {
      this.Livres = response.data;
      $(function() {$('#datatable').DataTable();});
    })
  },
}
</script>