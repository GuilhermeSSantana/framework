const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const clientes = await prisma.clientes.findMany();
    return res.json(clientes);
  },

  async create(req, res) {
    const { dataCadastro, status, pessoa } = req.body;
    try {
      const cliente = await prisma.clientes.create({
        data: {
          dataCadastro,
          status,
          pessoa: {
            connect: {
              id: pessoa,
            },
          },
        },
      });
      return res.json({
        mensagem: "Cliente cadastrado com sucesso!",
        cliente,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
