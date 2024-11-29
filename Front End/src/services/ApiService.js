import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const buscarPetId = (id) => api.get(`/pet/${id}`);
export const cadastrarPet = (pet) => api.post("/pet/", pet);
export const loginUsuario = (data) =>api.post("/login",data)

export const cadastrarAdotante = (adotante) => api.post("/adotante", adotante)