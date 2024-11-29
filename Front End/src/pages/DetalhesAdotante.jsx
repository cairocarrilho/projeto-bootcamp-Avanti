import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useEffect, useState } from "react";
import { cadastrarPet } from "../services/ApiService";
import { Link, useNavigate } from "react-router-dom";

function DetalhesAdotante() {
   
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await cadastrarPet({ ...data});
      navigate("/list");
      reset()
    } catch (error) {
      console.log(error);
    }
    console.log({ ...data });
  };




  return (
    <div className="w-[696px] md:w-[90%] md:max-h-full flex flex-col gap-8 rounded-3xl p-10 max-h-[740px] mx-auto mt-4 bg-white shadow-custom z-20 ">
      <h1 className="font-normal text-[32px] text-[#341B58]">
        Detalhes do Adotante
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="grid grid-cols-3 gap-6 w-full items-baseline ">
          <div className="col-span-3">
            <label className="font-normal text-sm text-neutral-80" htmlFor="nome">Nome</label>
            <input
              id="nome"
              placeholder="Digite seu nome"
              className="border outline-primary-pure-50 pl-4 !border-[#DCDCDC] h-12 rounded-lg w-full"
              {...register("nome", { required: "Campo obrigatório" })}
            />
            {errors?.nome && (
              <span className="text-red-500 text-sm">
                {errors.nome?.message}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 items-baseline">

          {/*EMAIL*/}
          <div className="flex flex-col gap-2">
            <label className="font-normal text-sm text-neutral-80">
              E-mail
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
          {/*TELEFONE*/}
          <div className="flex flex-col gap-2 ">
            <label className="font-normal text-sm text-neutral-80">
              Telefone
            </label>
            <input
              className="border  outline-primary-pure-50 px-4 !border-[#DCDCDC] h-12 rounded-lg"
              {...register("personalidade")}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 items-baseline sm:grid-cols-1">
          {/*RUA*/}
          <div className="flex flex-col gap-2 ">
            <label className="font-normal text-sm text-neutral-80">
              Rua
            </label>
            <input
              placeholder="Informe seu endereço"
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
              CEP
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
          

        </div>
        <div className="flex gap-6 justify-between items-center">
          <button className="cursor-pointer h-12 w-full bg-white text-primary-pure uppercase text-sm font-semibold  border border-[#E3DFEA] grid place-items-center rounded-lg ml-auto">
            Cancelar
          </button>
          <button
            type="submit"
            className="cursor-pointer h-12 w-full text-white bg-primary-pure uppercase text-sm font-semibold grid place-items-center rounded-lg ml-auto"
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetalhesAdotante;
