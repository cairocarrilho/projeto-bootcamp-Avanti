import { prismaClient } from "../database/PrismaClient.js"

export class AdocaoController {

    async buscarAdocoes (request, response) {
        try {
            const adocao = await prismaClient.adocao.findMany({
                include: {
                    pet: true,
                    adotante: true,
                }
            });
            return response.status(200).json(adocao);
        } catch (error) {
            return response.status(500).json({ erro: error.message });
        }
    }

    async buscarAdocaoPorId (request, response) {
        const { id } = request.params;
        try {
            const adocao = await prismaClient.adocao.findUnique ({
                where: { adocao_id: id }
            })
            return response.status(200).json(adocao);
        } catch (error) {
            return response.status(500).json({
                error: error.message
            });
        }
    }

    async salvarAdocao (request, response) {
        const { pet_id, adotante_id } = request.body;

        try {
            //Verifica se o pet está disponível para adoção
            const pet = await prismaClient.pet.findUnique({
                where: { pet_id: pet_id }
            })

            if (!pet) {
                return response.status(404).json({ erro: "Pet não encontrado" });
            }

            if (pet.status ==="adotado") {
                return response.status(400).json({ erro: "Este pet já foi adotado" });
            }

            //Cria o registro de adoção e atualiza o status do pet
            const adocao = await prismaClient.adocao.create({
                data: {
                    data_adocao: new Date(),     //Data atual da adoção
                    pet: { connect: { pet_id: pet_id } },     // Vincula o pet pela chave estrangeira
                    adotante: { connect: { adotante_id: adotante_id } },  // Vincula o adotante pela chave estrangeira
                },
            });
            //Atualiza o pet para adotado
            await prismaClient.pet.update({
                where: { pet_id: pet_id },
                data: { status: "adotado" }
            });

            return response.status(201).json(adocao);
        } catch (error) {
            console.error("Erro ao salvar adoção:", error);
            return response.status(500).json({ erro: error.message });
        }
    }

    async excluirAdocao (request, response) {
        const { id } = request.params;

        try {  //Verifica se a adoção existe e obtém o pet_id
            const adocao = await prismaClient.adocao.findUnique ({
                where: { adocao_id: id },
                include: { pet: true }  // Inclui dados do pet para obter o pet_id
            })

            if(!adocao) {
                return response.status(404).json({ erro: "Adoção não encontrada" });
            }

            //Exclui a adoção
            await prismaClient.adocao.delete({
                where: { adocao_id: id }
            })

            //Atualiza o status do pet para disponível
            await prismaClient.pet.update({
                where: { pet_id: adocao.pet_id },
                data: { status: "disponível" }
            });

            return response.status(200).json({ mensagem: "Adoção excluída com sucesso e pet disponível" });

        } catch (error) {
            return response.status(500).json({ erro: error.message });
        }
    }
}
