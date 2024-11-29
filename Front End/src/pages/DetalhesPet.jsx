import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useEffect, useState } from "react";
import { buscarPetId } from "../services/ApiService";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetalhesPet() {
  const { id } = useParams()
    // Simula a requisição para buscar os dados do pet
  // const fetchPetDetails = async (id) => {
  //   // Simulação de API
  //   return new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve({
  //         nome: "Buddy",
  //         data_de_nascimento: "2020-01-01",
  //         tamanho: "Médio",
  //         personalidade: "Brincalhão",
  //         especie: "Cachorro",
  //         status: "Adotado",
  //         descricao: "Muito carinhoso e bem treinado.",
  //       });
  //     }, 1000)
  //   );
  // };
 const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  
  useEffect(() => {
    console.log(id)
    async function getPetId() {
      const response = await buscarPetId(id)
      console.log(response)
      reset(response)
  }
  getPetId();
    
  },[id, reset])

  
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      // await cadastrarPet({ ...data});
      
      // navigate("/list");
      // função de editar
    } catch (error) {
      console.log(error);
    }
    console.log({ ...data });
  };

  return (
    <div className="w-[696px] md:w-[90%] md:max-h-full flex flex-col gap-8 rounded-3xl p-10 max-h-[740px] mx-auto mt-4 bg-white shadow-custom z-20 ">
      <h1 className="font-normal text-[32px] text-[#341B58]">
        Detalhes do Pet 
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="grid grid-cols-3 gap-6 md:grid-cols-1 items-baseline ">
          <div className="flex flex-col gap-2 col-span-2 md:col-span-full">
            <label className="font-normal text-sm text-neutral-80">Nome</label>
            <input
              placeholder="Nome do animal"
              className="border outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg"
              {...register("nome", { required: "Campo obrigatório" })}
            />
            {errors?.nome && (
              <span className="text-red-500 text-sm">
                {errors.nome?.message}
              </span>
            )} 
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-normal text-sm text-neutral-80">
              Data de nascimento
            </label>
            
             <Flatpickr
                    options={{
                        dateFormat: "d/m/Y",
                    }}
                    onChange={(date) => setValue("data_de_nascimento", date[0])} // Atualiza o valor no formulário
                    className="flatpickr-input border outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg placeholder-gray-400"
                    placeholder="dd/mm/aaaa"
                />
                {/* Registra o campo no formulário */}
                <input className="h-0"
                    type="hidden"
                    {...register("data_de_nascimento", { required: "Campo obrigatório" })}
                />
            {errors.data_de_nascimento && (
              <span className="text-red-500 text-sm">
                {errors.data_de_nascimento?.message}
              </span>
            )} 
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 items-baseline">
          <div className="flex flex-col gap-2">
            <label className="font-normal text-sm text-neutral-80">
              Tamanho
            </label>
            <input
              placeholder="Informe o tamanho"
              className="border   outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg"
              {...register("tamanho", { required: "Campo obrigatório" })}
            />
            {errors?.tamanho && (
              <span className="text-red-500 text-sm">
                {errors.tamanho?.message}
              </span>
            )} 
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-normal text-sm text-neutral-80">
              Personalidade
            </label>
            <input
              className="border  outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg"
              {...register("personalidade")}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 items-baseline sm:grid-cols-1">
          <div className="flex flex-col gap-2 ">
            <label className="font-normal text-sm text-neutral-80">
              Espécie
            </label>
            <input
              placeholder="Informe a espécie"
              className="border   outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg"
              {...register("especie", { required: "Campo obrigatório" })}
            />
            {errors?.especie && (
              <span className="text-red-500 text-sm">
                {errors.especie?.message}
              </span>
            )} 
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="font-normal text-sm text-neutral-80">
              Status
            </label>
            <input
              className="border  outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg"
              {...register("status", { required: "Campo obrigatório" })}
            />
            {errors?.status && (
              <span className="text-red-500 text-sm">
                {errors.status?.message}
              </span>
            )} 
          </div>
          <div className="flex flex-col gap-2 col-span-full">
            <label className="font-normal text-sm text-neutral-80">
              Descrição
            </label>
            <textarea
              placeholder="Descreva aqui"
              className="border  outline-primary-pure-50 px-4 p-4 !border-[#DCDCDC] h-28 rounded-lg"
              {...register("descricao")}
            />
          </div>
        </div>
        <div className="flex gap-6 justify-between items-center">
          <button className="cursor-pointer h-12 w-full bg-white text-primary-pure uppercase text-sm font-semibold  border border-[#E3DFEA] grid place-items-center rounded-lg ml-auto">
            Cancelar
          </button>
          <button
            type="submit"
            className="cursor-pointer h-12 w-full text-white bg-primary-pure uppercase text-sm font-semibold grid place-items-center rounded-lg ml-auto"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetalhesPet;
