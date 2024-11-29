import React, { useState, useEffect } from "react";
import Navegacao from "./Navegacao";
import { getAdocoes } from "../services/PetService"; // Serviço para buscar adoções

function ListaAdocoes() {
  const [adocoes, setAdocoes] = useState([]); // Estado para armazenar as adoções
  const [loading, setLoading] = useState(true); // Estado para gerenciar carregamento
  const [error, setError] = useState(null); // Estado para gerenciar erros

  // Função para buscar as adoções
  const buscaAdocoes = async () => {
    try {
      const data = await getAdocoes(); // Chama o serviço
      if(Array.isArray(data)) {
        setAdocoes(data);  // Atualiza estado com os dados recebidos
      } else {
        throw new Error("Formato de resposta inválido");
      }
      setLoading(false); // Finaliza o carregamento
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar a lista de adoções.");
      setLoading(false);
    }
  };

  useEffect(() => {
    buscaAdocoes();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[1000px] overflow-y-auto max-h-[80vh]">
        {/* Cabeçalho */}
        <Navegacao />

        {/* Exibição de carregamento ou erro */}
        {loading && <p>Carregando...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Tabela de Adoções */}
        {!loading && !error && adocoes.length > 0 && (
          <table className="table-auto w-full border-collapse border border-purple-300 text-center">
            <thead>
              <tr className="bg-purple-500 text-white">
                <th className="px-4 py-2 border">Animal</th>
                <th className="px-4 py-2 border">Adotante</th>
                <th className="px-4 py-2 border">Data de Adoção</th>
              </tr>
            </thead>
            <tbody>
              {adocoes.map((adocao) => (
                <tr
                  key={adocao.adocao_id}
                  className="group hover:bg-white-100 hover:bg-purple-200 transition-colors"
                >
                  <td className="border px-4 py-2">{adocao.pet?.nome || "N/A"}</td>
                  <td className="border px-4 py-2">{adocao.adotante?.nome || "N/A"}</td>
                  <td className="border px-4 py-2">{new Date(adocao.data_adocao).toLocaleDateString("pt-BR")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Mensagem caso não tenha adoções */}
        {!loading && !error && adocoes.length === 0 && (
          <p>Nenhuma adoção encontrada</p>
        )}

      </div>
    </div>
  );
}

export default ListaAdocoes;