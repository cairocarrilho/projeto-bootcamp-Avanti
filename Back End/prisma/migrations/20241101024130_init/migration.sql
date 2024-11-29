-- CreateTable
CREATE TABLE "Pet" (
    "pet_id" SERIAL NOT NULL,
    "nome" VARCHAR(256) NOT NULL,
    "especie" VARCHAR(64) NOT NULL,
    "data_de_nascimento" TIMESTAMP(3) NOT NULL,
    "status" VARCHAR(32) NOT NULL,
    "descricao" VARCHAR(512),
    "tamanho" VARCHAR(32) NOT NULL,
    "personalidade" VARCHAR(32),

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("pet_id")
);

-- CreateTable
CREATE TABLE "Adotante" (
    "adotante_id" SERIAL NOT NULL,
    "nome" VARCHAR(256) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "rua" VARCHAR(256) NOT NULL,
    "cep" VARCHAR(16) NOT NULL,
    "telefone" VARCHAR(16) NOT NULL,

    CONSTRAINT "Adotante_pkey" PRIMARY KEY ("adotante_id")
);

-- CreateTable
CREATE TABLE "Adocao" (
    "adocao_id" SERIAL NOT NULL,
    "data_adocao" TIMESTAMP(3) NOT NULL,
    "pet_id" INTEGER NOT NULL,
    "adotante_id" INTEGER NOT NULL,

    CONSTRAINT "Adocao_pkey" PRIMARY KEY ("adocao_id")
);

-- CreateTable
CREATE TABLE "PetHistoricoMedico" (
    "historico_medico" VARCHAR(128) NOT NULL,
    "pet_id" INTEGER NOT NULL,

    CONSTRAINT "PetHistoricoMedico_pkey" PRIMARY KEY ("historico_medico","pet_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adotante_email_key" ON "Adotante"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Adocao_pet_id_key" ON "Adocao"("pet_id");

-- AddForeignKey
ALTER TABLE "Adocao" ADD CONSTRAINT "Adocao_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet"("pet_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adocao" ADD CONSTRAINT "Adocao_adotante_id_fkey" FOREIGN KEY ("adotante_id") REFERENCES "Adotante"("adotante_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PetHistoricoMedico" ADD CONSTRAINT "PetHistoricoMedico_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet"("pet_id") ON DELETE RESTRICT ON UPDATE CASCADE;
