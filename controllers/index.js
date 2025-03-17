const models = require("../database/models");

const createPainting = async (req, res) => {
  try {
    const painting = await models.Painting.create(req.body);
    return res.status(201).json({
      painting
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPaintings = async (req, res) => {
  console.log('getting paintings');
  try {
    const paintings = await models.Painting.findAll({
      include: []
    });
    return res.status(200).json({ paintings });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPainting,
  getAllPaintings
};
