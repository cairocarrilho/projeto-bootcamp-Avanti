import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export class PetHistoryController {
  async getHistoricoById(request, response) {
    const { id } = request.params;
    try {
      const historico = await prismaClient.petHistoricoMedico.findUnique({
        where: {
          id: id,
        },
        select: {
          pet_id: true,
          historico_medico: true,
        },
      });
      if (!historico) {
        return response.status(404).json({
          error: "Histórico não encontrado.",
        });
      }
      return response.status(200).json(historico);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async getHistoricoByPetId(request, response) {
    const { id_pet } = request.params;
    try {
      const historico = await prismaClient.petHistoricoMedico.findMany({
        where: {
          pet_id: {
            equals: String(id_pet),
          },
        },
        select: {
          id: true,
          pet_id: true,
          historico_medico: true,
        },
      });
      if (!historico) {
        return response.status(404).json({
          error: "Nenhum Histórico encontrado para o pet_id fornecido.",
        });
      }
      return response.status(200).json(historico);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async updateHistoricoById(request, response) {
    const { id } = request.params;
    const { historico_medico } = request.body;
    try {
      const historico = await prismaClient.petHistoricoMedico.update({
        where: {
          id: id,
        },
        data: {
          historico_medico,
        },
      });
      return response.status(200).json(historico);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async deleteHistoricoById(request, response) {
    const { id } = request.params;
    try {
      await prismaClient.petHistoricoMedico.delete({
        where: { id: id },
      });
      return response
        .status(200)
        .json({ message: "Histórico excluído com sucesso" });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  async addHistoricoToPet(req, res) {
    const { historico_medico, pet_id } = req.body;
    try {
      const historico = await prismaClient.petHistoricoMedico.create({
        data: {
          historico_medico,
          pet_id,
        },
      });
      return res.status(200).json(historico);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
