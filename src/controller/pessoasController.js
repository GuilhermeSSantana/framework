const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const pessoas = await prisma.pessoas.findMany();
    return res.json(pessoas);
  },

  async create(req, res) {
    const { nome, cpf, dataNasc, mae } = req.body;
    try {
      const pessoa = await prisma.pessoas.create({
        data: {
          nome,
          cpf,
          dataNasc,
          mae,
        },
      });
      return res.json({
        mensagem: "Pessoa cadastrada com sucesso!",
        pessoa,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
