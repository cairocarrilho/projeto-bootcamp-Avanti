import {prismaClient} from "../database/PrismaClient.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class LoginController {
  async Login(request, response) {

    try{

      const {email, password} = request.body;
      const generatetoken = (id) => jwt.sign({adotante_id: id}, process.env.SECRET_JWT, {expiresIn: "1d"});

      const user = await prismaClient.adotante.findUnique({
        where:{
          email: email,
        }
      })

      if(!user) return response.status(400).send({ message: 'Senha incorreta ou usuário incorreto' });

      const isPasswordValid = await bcrypt.compare(password, user.password)


      if(!isPasswordValid){
        return response.status(400).send({msg: 'Senha incorreta ou usuario incorreto'});
      }


      const token = generatetoken(user.adotante_id)

      return response.status(200).send("Usuário conectado com sucesso");
    }catch (error) {
      console.error("Erro ao processar o login:", error.message);
      return response.status(500).send({ message: "Erro interno no servidor" });
    }


  }

}




