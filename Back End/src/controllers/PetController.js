import {prismaClient} from "../database/PrismaClient.js";

export class PetsController {

    async animalList (req, res) {
        try{
            const animalPet = await prismaClient.pet.findMany();
            return   res.status(200).json(animalPet);
        } catch(error) {
            res.status(500).json(error);
        }

    }

    async animalListId (req, res){
          const {id} = req.params;
          try{
            const pet = await  prismaClient.pet.findUnique({
              where:{
                pet_id: id
              }
            })
            return res.status(200).send(pet);
          }catch (error){
            res.status(500).send({message: "Pet não encontrado"});
          }
    }

    async  petAdd (req, res) {
        const {nome,especie,data_de_nascimento,status,descricao,tamanho, personalidade} = req.body;
        try{
            const animalPet = await prismaClient.pet.create({
                data:{
                    nome,especie,data_de_nascimento,status,descricao,tamanho, personalidade
                }
            })
            return res.status(200).json(animalPet);
        } catch(error) {
            res.status(500).json(error);
        }
    }

    async  petUpdate (req, res) {
        const {pet_id} = req.params;
        const { nome,especie,data_de_nascimento,status,descricao,tamanho, personalidade } = req.body;
        try{
            const animalPet = await prismaClient.pet.update({
                where:{
                        pet_id: pet_id
                },
                data:{
                    nome,especie,data_de_nascimento,status,descricao,tamanho, personalidade
                }

            })
            return res.status(200).json(animalPet);
        } catch(error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    }

    async  petDelete (req, res) {
        const {pet_id} = req.params;
        try{
            await prismaClient.pet.delete({
                where:{
                    pet_id: pet_id
                }
            })
            return res.status(200).json({mensage: 'Pet deletado com sucesso'});
        } catch(error){
            res.status(500).json(error);

        }
    }
}

