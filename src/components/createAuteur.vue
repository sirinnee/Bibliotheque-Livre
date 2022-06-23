<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Ajout Auteur</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>ID</label>
          <input type="text" class="form-control" v-model="auteur.id" required />
        </div>
        <div class="form-group">
          <label>Nom</label>
          <input type="text" class="form-control" v-model="auteur.nom" required />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="auteur.email" required />
        </div>
        <br />
        <br />
        <div class="form-group">
          <button class="btn btn-danger btn-block">Ajouter</button>
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
      auteur: {
        id: "",
        nom: "",
        email: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      ProductAuteur.add(this.auteur)
        .then(() => {
          this.$router.push("/listAuteur");
          this.auteur = {
            id: "",
            nom: "",
            email: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onFileChange(e) {
      this.auteur.image = e.target.files[0].name;
    },
  },
};
</script>
<style scoped>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
