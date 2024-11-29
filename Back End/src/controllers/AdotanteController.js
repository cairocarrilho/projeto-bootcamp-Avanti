import {prismaClient} from "../database/PrismaClient.js";
import bcrypt from 'bcrypt'




export class AdotanteController {

  async buscarAdotantes(request, response){
    //Listar todos os registros
    try {
      const adotante = await prismaClient.adotante.findMany();
      return response.status(200).send(adotante);
    } catch (error) {
      return response.status(500).send({error: error.message})
    }
  }

  async buscarAdotantesPorId(request,response){
    //Listar um registro
    const  {id}  = request.params;

    try {
      const adotante = await prismaClient.adotante.findUnique({
        where: {
          adotante_id: id,
        },
        include: {
          adocao: true,
        },
      });
      if (!adotante) {
        return response.status(404).send({ msg: `Não foi encontrado nenhum Usuário` });
}
      return response.status(200).send(adotante)
    } catch (e) {
        return response.status(400).send({msg: `Não foi encontrado nenhum adotante para esse id`});
    }

  }

  async salvarAdotante (request, response) {
    const { nome, email, rua, cep, telefone, password } = request.body


    if (!nome){
      return  response.status(422).send({msg: 'O Nome precisa ser prenchido'});
    }
    if (!email){
      return response.status(422).send({msg: 'O email precisa ser prenchido'});
    }

    if (!password){
      return response.status(422).send({msg: 'Senha precisa ser prenchida'});
    }
    if (!rua){
      return response.status(422).send({msg: 'A rua precisa ser prenchida'});
    }

    if (!cep){
      return response.status(422).send({msg: 'cep precisa ser prenchido'});
    }
    if (!telefone){
      return response.status(422).send({msg: 'O telefone precisa ser prenchido'});
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newAdotante = await prismaClient.adotante.create({
        data: {
          nome,
          email,
          rua,
          cep,
          telefone,
          password: hashedPassword
        }
      });

      return response.status(200).send({newAdotante});

    } catch (e) {
      return response.status(404).send({msg: "Não foi encontrado nenhum adotante para esse id"});
    }


  }

  async atualizarAdotante(request, response) {
    const {id}  = request.params;
    const { nome, email, rua, cep, telefone, password } = request.body;

    try {

      const hashedPassword = await bcrypt.hash(password, 10);

      await prismaClient.adotante.findUnique({
        where:{
          adotante_id:id,
        }
      })

      const adotanteAtualizado = await prismaClient.adotante.update({
        where: {
          adotante_id: id,
        },
        data: {
        nome,
         email,
         rua,
         cep,
         telefone ,
         password: hashedPassword
        },
      });

      return response.status(200).json(adotanteAtualizado);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao atualizar adotante" });
    }
  }

  async deletarAdotantePorId(request, response) {
    const { id } = request.params;

    try {
      const adotanteDeletado = await prismaClient.adotante.delete({
        where: {
          adotante_id: id,
        },
      });

      return response.status(200).json({ message: "Adotante deletado com sucesso", adotante: adotanteDeletado });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Erro ao deletar adotante" });
    }
  }


}


