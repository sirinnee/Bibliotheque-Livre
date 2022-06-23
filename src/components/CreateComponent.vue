 <template>
<form @submit.prevent="handleSubmitForm">
    <table>
        <tr>
<td class="form-group">
<label>ISBN</label>
<input type="text" class="form-control" vmodel="livre.isbn" required>
</td>
<td class="form-group">
<label>Edition</label>
<input type="text" class="form-control" vmodel="livre.maisonedition" >
</td>
</tr>
<tr>
<td class="form-group">
<label>Titre</label>
<input type="text" class="form-control" vmodel="livre.titre" required>
</td>

<td class="form-group">
<label>Année D'Edition</label>
<input type="number" class="form-control" vmodel="livre.annedition" >
</td></tr>
<tr>
<td class="form-group">
<label>Auteur</label>
<input type="text" class="form-control" vmodel="livre.auteur" >
</td>
<td class="form-group">
<label>Catégorie</label>
<input type="text" class="form-control" vmodel="livre.categorie" >
</td>
</tr>
<tr>
<td class="form-group">
<label>Quantité</label>
<input type="number" class="form-control" vmodel="livre.qtestock" >
</td>
<label>couverture du livre</label>
</tr>
<td class="form-group">
<label>Prix</label>
<input type="number" class="form-control" vmodel="livre.prix" >
</td>

<td class="form-group">
     <file-pond
            name="image"
            ref="image"
            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
            allow-multiple="true"
            accepted-file-types="image/jpeg, image/png"
            v-bind:files="image"
    />
</td>
<tr>
<td class="form-group">
<button class="btn btn-info btn-block">Ajouter</button>
</td>
</tr>
</table>
</form>
</template>
<script>
import ProductService from "../services/LivreService";
import vueFilePond from 'vue-filepond'
  import 'filepond/dist/filepond.min.css'
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
const FilePond = vueFilePond(
          FilePondPluginFileValidateType,
          FilePondPluginImagePreview
  )
export default {
data() {
return {
livre: {
isbn: "",
titre: "",
maisonedition: "",
annedition:0,
auteur: "",
prix: 0,
qtestock: 0,
categorie: "",
image: ""
}
}
},
components:{
    FilePond
},
methods: {
handleSubmitForm() {
ProductService.add(this.livre).then(() => {
this.$router.push('/')
this.livre = {
isbn: "",
titre: "",
maisonedition: "",
annedition:"",
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
display: block;
}
</style>