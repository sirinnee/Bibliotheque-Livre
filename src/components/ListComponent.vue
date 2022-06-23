<template>

 <!--
     <table> 
            <tr><td></td>
                    <td class="col"> 
                <input type="text" class="form-control" v-model="titre" placeholder="Titre">
                <input type="text" class="form-control" v-model="isbn" placeholder="Isbn"></td>
                    <td class="col">  <input type="text" class="form-control" v-model="maisonedition" placeholder="Edition">
                 <input type="text" class="form-control" v-model="annedition" placeholder=" Anneé D'Edition"></td>
                    <td class="col"> <input type="text" class="form-control" v-model="auteur" placeholder="Auteur">
                     <input type="text" class="form-control" v-model="prix" placeholder="Prix"></td>
                    <td class="col"> <input type="text" class="form-control" v-model="qtestock"  placeholder="Quantité Disponible">
                 <input type="text" class="form-control" v-model="categorie" placeholder="Categorie"></td>
              <td  class="col" colspan="2">
                    <input type="file" @change="onFileChange">
                    <button class="btn btn-info btn-block" v-on:click="ajouter()">Ajouter</button></td>
            </tr>
            
        </table>    
   -->
    <div class="row align-items-start custom-line text-warning">
        <div class="panel-heading">Livres </div>   
        <table class="table table-bordered text-secondary">
          <thead clas="text-secondary">
            <tr clas="text-secondary">
                    <th> couverture</th>
                    <th class="col">Titre</th>
                    <th class="col">Edition</th>
                    <th class="col">Auteur</th>
                    <th class="col">Prix</th>
                    <th class="col">Disponible</th>
                    <th class="col">Categorie</th>
                    <span clas="col-collapse">
                    <th>
                       Action
                    </th>
                    <th></th>
                    </span>
            </tr>
          </thead>
          <tbody>
            <tr v-for="liv in Livres" :key="liv.id">
                <td class="col"><span v-if="liv.image.indexOf('.')>-1"><img
                    :src="require(`../assets/images/${liv.image}`)" :alt="liv.titre"
                    width="70"></span></td>
                    <td class="col"> {{ liv.titre }} {{liv.isbn}}</td>
                    <td class="col">{{ liv.maisonedition }} {{liv.annedition}}</td>
                    <td class="col">
                    <router-link :to="{name: 'oneauteur', params: {AT: liv.auteur }}" class=" btn " style="background-color:transparent">{{ liv.auteur }}
                    </router-link>
                    </td>
                    <td class="col">{{liv.prix}}</td>
                    <td class="col">{{liv.qtestock}}</td>
                    <td class="col">{{liv.categorie}}</td>
                    <td class="col">
                        <router-link  class="btn btn-info btn-block" :to="{name: 'Modification', params: {id: liv.id }}">Edit
                        </router-link>
                         <router-link
                  class="btn btn-info btn-block"
                  :to="{ name: 'oneLivres', params: { id: liv.id } }"
                  >afficher
                </router-link>
                        </td><td>
                        <button @click.prevent="deleteLivre(liv.id)" class="btn btn-warning btn-block">Delete</button>
                   
                    </td>
            </tr>  
          </tbody>       
        </table>
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
created() {
ProductService.getAll().then(res => {
this.Livres = res.data;
}).catch(error => {
console.log(error)
});
},
methods: {
deleteLivre(id){
let indexOfArrayItem = this.Livres.findIndex(i => i.id === id);
if (window.confirm("Etes-vous sû de vouloir supprimer ?")) {
ProductService.del(id).then(() => {
this.Livres.splice(indexOfArrayItem, 1);
}).catch(error => {
console.log(error)
});
}
},
ajouter() {
ProductService.add(this.Livre).then(() => {
this.$router.push('/')
this.Livre = {
isbn: "",
titre: "",
maisonedition: "",
annedition: "",
auteur: "",
prix: "",
qtestock: "",
categorie: "",
image: ""
}
}).catch(error => {
console.log(error)
});
},
onFileChange(e) {
this.livre.image = e.target.files[0].name;
}

}
}
</script>
<style>
.btn-success {
margin-right: 10px;
}
</style>