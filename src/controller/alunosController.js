const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const alunos = await prisma.alunos.findMany();
    return res.json(alunos);
  },

  async create(req, res) {
    const { pessoa, matricula, anoIngresso } = req.body;
    try {
      const aluno = await prisma.alunos.create({
        data: {
          pessoa: {
            connect: {
              id: pessoa,
            },
          },
          matricula,
          anoIngresso,
        },
      });
      return res.json({
        mensagem: "Aluno cadastrado com sucesso!",
        aluno,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
