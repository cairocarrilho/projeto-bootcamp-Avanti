import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000'  // URL base do back-end
});

// Serviço para buscar todos os pets
export const getPets = async () => {
    try {
        const response = await api.get('/pet');  // Rota configurada no back-end
        return response.data;  // Retorna os dados da resposta

    } catch (error) {
        console.error('Erro ao buscar os pets:', error);
        throw error;  // Lança o erro para ser tratado pelo componente
    }
}

//Função para calcular a idade
export const calcularIdade = (dataDeNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataDeNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    //Ajusta se o aniversário ainda não ocorreu este ano
    if(mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

//Serviço para buscar todas as adoções
export const getAdocoes = async () => {
    const response = await api.get('/adocao'); 
    return response.data;
  }; 