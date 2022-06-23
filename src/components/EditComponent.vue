<template>
<div class="row justify-content-center">
<div class="col-md-6">
<h3 class="text-center">Modification</h3>
<form @submit.prevent="handleSubmitForm">
<div class="form-group">
<label>ISBN</label>
<input type="text" class="form-control"  v-model="livre.isbn" required>
</div>
<div class="form-group">
<label>Titre</label>
<input type="text" class="form-control" v-model="livre.titre" required>
</div>
<div class="form-group">
<label>Edition</label>
<input type="text" class="form-control" v-model="livre.maisonedition" >
</div>
<div class="form-group">
<label>Année</label>
<input type="number" class="form-control" v-model="livre.annedition" >
</div>
<div class="form-group">
<label>Auteur</label>
<input type="text" class="form-control" v-model="livre.auteur" >
</div>
<div class="form-group">
<label>Prix</label>
<input type="number" class="form-control" v-model="livre.prix" >
</div>
<div class="form-group">
<label>Quantité</label>
<input type="number" class="form-control" v-model="livre.qtestock" >
</div>
<div class="form-group">
<label>Catégorie</label>
<input type="text" class="form-control" v-model="livre.categorie" >
</div>
<div class="form-group">
<label>Image</label>
<input type="file" class="formcontrol" @change="onFileChange">
</div>
<div class="form-group">
<button class="btn btn-danger btn-block">Modifier</button>
</div>
</form>
</div>
</div>
</template>
<script>
import ProductService from "../services/LivreService";
export default {
data() {
return {
livre: {}
}
},
created() {
ProductService.getOne(this.$route.params.id).then((res) => {
this.livre = res.data;
})
},
methods:{
handleSubmitForm() {
ProductService.edit(this.$route.params.id, this.livre).then(()=> 
{
this.$router.push('/')
this.livre = {
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
<style scoped>
img {
width: 30%;
margin: auto;
display: block;
margin-bottom: 10px;
}
</style>