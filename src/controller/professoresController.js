const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  async index(req, res) {
    const professores = await prisma.professores.findMany();
    return res.json(professores);
  },

  async create(req, res) {
    const { pessoa, areaAtuacao, numeroRegistro } = req.body;
    console.log(req.body);

    try {
      const professor = await prisma.professores.create({
        data: {
          pessoa : {
            connect : {
              id : pessoa
            }
          },
          areaAtuacao,
          numeroRegistro,
        },
      });
      return res.json({
        mensagem: "Professor cadastrado com sucesso!",
        professor,
      });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
