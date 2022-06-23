<template>

<div class="row justify-content-center">
<div class="col-md-6">
<h3 class="text-center">Modifier Auteur</h3>
<form @submit.prevent="handleSubmitForm">
<div class="form-group">
<label>Id</label>
<input type="text" class="form-control" v-model="auteur.id" required>
</div>
<div class="form-group">
<label>Nom</label>
<input type="text" class="form-control" v-model="auteur.nom" required>
</div>

<div class="form-group">
<label>Email</label>
<input type="email" class="form-control" v-model="auteur.email" >
</div>

<div class="form-group">
<button class="btn btn-danger btn-block">Modifier</button>
</div>
</form>
</div>
</div>
</template>
<script>
import ProductAuteur from "../services/AuteurService";
export default {
data() {
return {
auteur: {}
}
},
created() {
ProductAuteur.getOne(this.$route.params.AT).then((res) =>{this.auteur = res.data;})},
methods: {
handleSubmitForm() {
ProductAuteur.edit(this.$route.params.AT, this.auteur).then(()=>{this.$router.push('/auteur')
this.auteur = {
id: "",
nom: "",
email: ""
}
}).catch(error => {
console.log(error)
});
},
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