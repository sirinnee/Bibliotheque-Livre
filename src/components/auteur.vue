<template>
  <div class="row">
    <div class="col-md-40">
      <div class="row align-items-start custom-line">
        <div class="panel-heading">Auteur</div>
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="a in auteur" :key="a.id">
              <td>{{ a.id }}</td>
              <td>{{ a.nom }}</td>
              <td>{{ a.email }}</td>
              <td class="col">
                <router-link
                  class="btn btn-info btn-block"
                  :to="{ name: 'EditAuteur', params: { AT: a.id } }"
                  >Edit
                </router-link>
                <button @click.prevent="deleteA(a.id)" class="btn btn-warning btn-block">
                  Delete
                </button>
                <router-link
                  class="btn btn-info btn-block"
                  :to="{ name: 'oneauteur', params: { AT: a.id } }"
                  >afficher
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import ProductAuteur from "../services/AuteurService";
export default {
  data() {
    return {
      auteur: [],
    };
  },
  created() {
    ProductAuteur.getAll()
      .then((res) => {
        this.auteur = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteA(AT) {
      let indexOfArrayItem = this.auteur.findIndex((i) => i.id === AT);
      if (window.confirm("Etes-vous sû de vouloir supprimer ?")) {
       ProductAuteur.del(AT)
          .then(() => {
            this.auteur.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    ajouter() {
     ProductAuteur.add(this.auteur)
        .then(() => {
          this.$router.push("/");
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
  },
};
</script>
<style>
.btn-success {
  margin-right: 10px;
}
</style>
