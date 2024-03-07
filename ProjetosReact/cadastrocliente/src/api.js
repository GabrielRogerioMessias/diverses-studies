import axios from "axios";
const API_URL = 'http://localhost:4000/cidades'
export const fetchCidades = () => {
    return axios.get(API_URL)
        .then(response => response.data)
        .catch(error => console.log(Error => 'Error ao buscar cidades: ', error))
}