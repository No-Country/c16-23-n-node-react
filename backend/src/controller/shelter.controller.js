import shelterService from "../services/shelter.service.js";

const shelterController = {
  getShelter: async (req, res) => {
    try {
      const refugios = await shelterService.getShelters();
      return res.send({ "Cantidad de Refugios": refugios.length, refugios });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  shelterById: async (req, res) => {
    try {
      const { _id } = req.params;

      const shelter = await shelterService.shelterById(_id);
      return res.json(shelter);
    } catch (error) {
      console.error("Error al buscar refugios por nombre:", error);
      return res.status(500).json({ message: error.message });
    }
  },

  shelterByName: async (req, res) => {
    try {
      const { name } = req.query;

      const shelters = await shelterService.shelterByName(name);

      if (shelters.length === 0) return res.status(404).json({ message: "No se encontraron refugios con ese nombre" });
      return res.json(shelters);
    } catch (error) {
      console.error("Error al buscar refugios por nombre:", error);
      return res.status(500).json({ message: error.message });
      //
    }
  },
  shelterRegister: async (req, res) => {
    try {
      const data = req.body;

      const existingUser = await shelterService.registerShelter(data);
      console.log(existingUser);

      res.status(200).json({ message: "Usuario registrado exitosamente y correo electrónico enviado" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message }); //
    }
  },
  login: async (req, res) => {
    try {
      const data = req.body;
      const shelterUser = await shelterService.login(data);
      return res.status(200).json(shelterUser);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
};

export default shelterController;
