import Refugio from "../models/refugios.js";

const getRefugio = async (req, res) => {
  try {
    const refugios = await Refugio.find();
    return res.send({ "Cantidad de Refugios": refugios.length, refugios });
  } catch (error) {
    console.log(error);
  }
};

export default getRefugio;
