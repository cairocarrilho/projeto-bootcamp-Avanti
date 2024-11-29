import {useState} from "react";
import {loginUsuario} from "../services/ApiService"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login(){

    const { register, handleSubmit, formState: {error} } = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")


    const loginAdotante = async (data)=>{
        try{
            const res = await loginUsuario({...data});
            const token = res.data.token;
            localStorage.getItem("token",token)

            if (!token) {
                res.status(400).json(setErrorMessage("Falha na autenticação. Tente novamente.")) 
            }

            navigate('/cadastrar-pet');

        }catch (error){
            console.error("Erro ao buscar adotantes:", error);
            setErrorMessage(error.response?.data?.message || "Erro ao fazer login.");
        }

    }



    return(
        <>
            <form onSubmit={handleSubmit(loginAdotante)}
                  className={"mt-40  mr-36 w-[625px] h-[684px] md:max-h-full flex flex-col gap-8 rounded-3xl p-10 max-h-[740px] mx-auto  bg-white shadow-custom z-20 "}>

                <h1 className={" text-3xl items-center max-w-sm mx-auto mt-14 font-bold text-[#7952B3]"}>Pet
                    Connect</h1>

                <div className={"text-center p-2"}>
                    <input type="text"
                           placeholder="Insira seu email"
                           className="border  w-[100%] outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg"
                           {...register("email", {required: " Email é obrigatório"})}/>
                </div>


                <div className={"text-center p-2"}>

                    <input type="password"
                           placeholder="Insira sua senha"
                           className="border w-[100%]  outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg"
                           {...register("password", {required: " Senha é obrigatória"})}/>
                </div>




                <button
                    className="cursor-pointer h-12 w-[100%] text-white bg-primary-pure uppercase text-sm font-semibold grid place-items-center rounded-lg ml-auto"
                    type="submit">Entrar
                </button>

                {errorMessage && <p className="text-red-500">{errorMessage}</p>}


                <h3>Não possui cadastro clique no Cadastrar-me</h3>

                <button
                    className="cursor-pointer h-12 w-[100%] text-white bg-primary-pure uppercase text-sm font-semibold grid place-items-center rounded-lg ml-auto"
                    type="button"
                    onClick={() => navigate('/cadastrar-pet')} // mudar depois
                >
                    Cadastrar-me
                </button>



            </form>


        </>
    )
}


export default Login;
