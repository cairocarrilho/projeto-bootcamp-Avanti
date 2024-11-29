import { prismaClient } from "../database/PrismaClient.js";





async function validateId (request, response, next) {
  const  {id}  = request.params;

try{
  const adotante = await prismaClient.adotante.findUnique({
    where: {
      adotante_id: id,
    },
  });

  if (!adotante) {

    return response.status(404).json({
      message: `Não foi encontrado nenhum adotante para o id: `,
    });
  }

  next();

}catch (e){
  return response.status(500).json({ error: "Erro ao validar ID" });
}

}

async function validateUser (request, response, next) {
  const {id} = request.params;

  try{
    const user = await prismaClient.adotante.findUnique({
      where:{
        adotante_id:id
      }
    });


    if(!user){
      return response.status(400).send({message: " Usuário inválido"})
    }

    next()

  }catch (e){
    return response.status(500).json({ error: "Erro ao validar usuário" });
  }


}

export { validateUser, validateId };
