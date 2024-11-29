import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {PawPrint, FileText} from 'lucide-react';
import Navegacao from './Navegacao';
import { getPets, calcularIdade } from '../services/PetService';

function ListaPets () {
    const [pets, setPets] = useState([]);  // Estado para armazenar os animais
    const [filteredPets, setFilteredPets] = useState([]);  // Estado para armazenar os animais filtrados
    const [loading, setLoading] = useState(true);  // Estado para gerenciar carregamento
    const [error, setError] = useState(null);  // Estado para gerenciar erros
    const [searchTerm, setSearchTerm] = useState('');  // Estado para gerenciar o texto de busca
    const [modalAberto, setModalAberto] = useState([false]);
    const [petSelecionado, setPetSelecionado] = useState(null);

    // Busca os pets ao carregar a página
    useEffect(() => {

        buscaPets();

    }, []) 

    // Função para buscar os animais
    const buscaPets = async () => {
        try {
            const data = await getPets();  // Chama o serviço
            setPets(data);  // Atualiza o estado com os dados recebidos
            setFilteredPets(data);  // Inicializa a lista filtrada
            setLoading(false);  // Finaliza o carregamento
        } catch (err) {
            console.error(err);
            setError('Erro ao carregar a lista de animais.');
            setLoading(false);
        }
    }


    //Função para filtrar os Pets com base no input de busca
    const handleFilter = (e) => {
        const term = e.target.value.toLowerCase();  // Texto digitado em minúsculas
        setSearchTerm(term);  // Texto digitado em minúsculas

        if(term === '') {
            setFilteredPets(pets);  // Se o input estiver vazio, exibe todos os pets
        } else {  // Filtra os pets por espécie ou tamanho
            const filtered = pets.filter (
                (pet) => pet.especie.toLowerCase().includes(term) || pet.tamanho.toLowerCase().includes(term)
            );
            setFilteredPets(filtered)  // Atualiza a lista filtrada
        }
    }

    // Abre o modal para adoção
    const abrirModal = (pet) => {
        setPetSelecionado(pet);  // Armazena o pet selecionado
        setModalAberto(true);  // Abre o modal
    }

    // Fecha o modal
    const fecharModal = () => {
        setModalAberto(false);  // Fecha o modal
        setPetSelecionado(null);  // Limpa o pet selecionado
    };

    // Função para salvar adoção


    return (
        <div className="min-h-screen flex items-center justify-center py-8">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[1000px] overflow-y-auto max-h-[80vh]">
                
                {/* Cabeçalho */}
                <Navegacao/>

                {/* Input de busca */}
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder='Filtrar por espécie ou tamanho'
                        value={searchTerm}
                        onChange={handleFilter}
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-purple-400'
                    />
                </div>
            
                {/* Exibição de carregamento ou erro */}
                {loading && <p>Carregando...</p>}
                {error && <p className='text-red-500'>{error}</p>}

                {/* Tabela de Pets */}
                {!loading && !error && filteredPets.length > 0 && (
                    <table className="table-auto w-full border-collapse border border-purple-300 text-center">
                        <thead>
                            <tr className="bg-purple-500 text-white">
                                <th className="px-4 py-2 border">Nome</th>
                                <th className="px-4 py-2 border">Espécie</th>
                                <th className="px-4 py-2 border">Idade</th>
                                <th className="px-4 py-2 border">Tamanho</th>
                                <th className="px-4 py-2 border">Adotado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPets.map((pet, index) =>(
                                <tr key={index} className="group hover:bg-white-100 hover:bg-purple-200 transition-colors">
                                    <td className="border px-4 py-2">{pet.nome}</td>
                                    <td className="border px-4 py-2">{pet.especie}</td>
                                    {/* Converte para idade */}
                                    <td className="border px-4 py-2">{calcularIdade(pet.data_de_nascimento)}</td>{' '}
                                    <td className="border px-4 py-2">{pet.tamanho}</td>
                                    <td className="border px-4 py-2 flex items-center justify-center">
                                        {/* Converte status em "Sim" ou "Não" */}
                                        <span className="text-center flex-1">{pet.status === 'Ativo' ? 'Não' : 'Sim'}</span>

                                        {/* Ícones aparecem apenas no hover */}
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link to={"#"} 
                                                className="text-green-500 hover:text-purple-700"
                                                onClick={() => abrirModal(pet)}
                                                >
                                                <PawPrint size={20}/>
                                            </Link>

                                            <Link to={`/detalhes-pet/${pet.pet_id}`} className="text-purple-500 hover:text-purple-700">
                                                <FileText size={20}/>
                                            </Link>
                                        </div>

                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>

                )}
                
                {/* Mensagem caso não tenha animais */}
                {!loading && !error && filteredPets.length === 0 && <p>Nenhum animal encontrado</p>}

                {/* Botão adicionar Pet */}
                <div className="mt-6 flex justify-content">
                    <Link to="/cadastrar-pet">
                        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400">
                            Adicionar novo pet
                        </button>
                    </Link>
                </div>
            </div>

            {modalAberto && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Confirmar adoção</h2>
                        <p className="mb-4">
                            Deseja confirmar a adoção para o pet: <strong>{petSelecionado?.nome}</strong>?
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                                onClick={fecharModal}
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                                    onClick={() => {
                                    // Lógica para confirmar a adoção
                                    console.log("Adoção confirmada para:", petSelecionado);
                                    fecharModal(); 
                                }}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default ListaPets;