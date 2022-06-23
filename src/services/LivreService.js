import axios from 'axios'
class ProductService {
getAll() {
return axios.get("http://localhost:3000/livres")
}
add(data) {
return axios.post("http://localhost:3000/livres", data);
}
getOne(id) {
return axios.get(`http://localhost:3000/livres/${id}`)
}
edit(id,data) {
return axios.put(`http://localhost:3000/livres/${id}`,data);
}
del(id) {
return axios.delete(`http://localhost:3000/livres/${id}`)
}
}
export default new ProductService();
