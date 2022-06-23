<template>
<div class="row">
<div class="col-md-30">
<table class="table table-striped ">
<thead class="thead-dark bg-primary text-light">
         <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>email</th>
        </tr>
     </thead>
     <tbody> 
        <tr>
                <td>{{a.id}}</td>
                <td>{{a.nom}}</td>
                <td>{{a.email}}</td>
        </tr>
     </tbody>
     </table>
</div></div>
</template>
<script>
import ProductAuteur from "../services/AuteurService.js";
export default {
data() {
return {
auteur: {}
}
},
created() {
        ProductAuteur.getOne(this.$route.params.AT).then(res => {
this.auteur = res.data;
}).catch(error => {
console.log(error)
});
},
}
</script>
