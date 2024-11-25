-- CreateTable
CREATE TABLE "pessoas" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "cpf" VARCHAR(14) NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "mae" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientesId" TEXT,
    "alunosId" TEXT,
    "professoresId" TEXT,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "dataCadastro" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alunos" (
    "id" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "anoIngresso" INTEGER NOT NULL,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professores" (
    "id" TEXT NOT NULL,
    "areaAtuacao" TEXT NOT NULL,
    "numeroRegistro" INTEGER NOT NULL,

    CONSTRAINT "professores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_clientesId_fkey" FOREIGN KEY ("clientesId") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_alunosId_fkey" FOREIGN KEY ("alunosId") REFERENCES "alunos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_professoresId_fkey" FOREIGN KEY ("professoresId") REFERENCES "professores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
