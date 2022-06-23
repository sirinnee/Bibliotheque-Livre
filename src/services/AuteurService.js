import axios from "axios"
class ProductAuteur {
    getAll() {
    return axios.get("http://localhost:3000/auteur")
    }
    add(data) {
    return axios.post("http://localhost:3000/auteur", data);
    }
    getOne(AT) {
    return axios.get(`http://localhost:3000/auteur/${AT}`)
    }
    edit(AT,data) {
    return axios.put(`http://localhost:3000/auteur/${AT}`,data);
    }
    del(AT) {
    return axios.delete(`http://localhost:3000/auteur/${AT}`)
    }
    }
    export default new ProductAuteur();