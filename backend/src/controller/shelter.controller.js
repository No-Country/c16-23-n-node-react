import shelterService from "../services/shelter.service.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};
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
  editShelter: async (req, res) => {
    try {
      const data = req.body;
      const id = req.params._id;

      if (data.password) throw new Error("Can't change password");
      if (data.email) throw new Error("Can't change email address");
      const shelter = await shelterService.editShelter(data, id);
      return res.status(200).json(shelter);
    } catch (error) {
      return res.status(404).json({ message: error.message });
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

      const newShelter = await shelterService.registerShelter(data);

      const token = generateToken(newShelter._id);

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "conexionhuellitas@gmail.com",
          pass: process.env.NODEMAILER,
        },
      });

      const mailOptions = {
        from: "conexionhuellitas@gmail.com",
        to: newShelter.email,
        subject: "Confirmación de Registro",
        text: `¡Gracias ${newShelter.userName} de ${newShelter.name} por registrarte en nuestra plataforma! Por favor, haz clic en el siguiente enlace para confirmar tu correo electrónico.`,
        html: `<div style="font-family: Arial, sans-serif; color: #333;">

        <h2 style="color: #4CAF50;">¡Bienvenido a nuestra comunidad en línea de Huellitas! 🎉</h2>
        <h3 style="color: #4CAF50;">¡Gracias ${newShelter.userName} de ${newShelter.name} por registrarte en nuestra plataforma!</h3>
        <p>¡Estamos emocionados de tenerte como parte de nuestra familia y  por elegirnos para ser parte de tu viaje de cuidado y amor por los animales. 🐾</p>
        
        <p>Para completar tu registro y empezar a disfrutar de todos los beneficios de nuestra plataforma, por favor haz clic en el siguiente enlace:</p>
        
        <p style="margin: 20px 0;"><a href="http://localhost:3000/api/verify-email/?token=${token}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Confirmar correo electrónico</a></p>
        
        <p>Una vez que hayas confirmado tu correo electrónico, podrás acceder a todas nuestras funciones, conectarte con otros amantes de los animales, y contribuir a hacer del mundo un lugar mejor para nuestras queridas mascotas. 💖</p>
        
        <p>¡Gracias por unirte a nosotros y por tu compromiso con el bienestar animal! 🐾</p>
        
        <p>Con cariño,</p>
        <p>El equipo de Huellitas 🐾</p>

    </div>`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Error al enviar el correo electrónico:", error);
        } else {
          console.log("Correo electrónico de validación enviado:", info.response);
        }
      });

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
