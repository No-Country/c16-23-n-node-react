import shelterService from "../services/shelter.service.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import fs from "fs-extra";
import { uploadImage, deleteImage } from "../helpers/cloudinary.js";
export const uploadImages = async (files, callback) => {
  if (!files || !Array.isArray(files)) return;

  const imagesToUpload = [];
  for (const image of files) {
    const result = await uploadImage(image.tempFilePath);
    fs.unlink(image.tempFilePath);
    const folder = result.public_id;
    const url = result.secure_url;
    const imgs = { folder, url };
    imagesToUpload.push(imgs);
  }

  callback(imagesToUpload);
};

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};
const shelterController = {
  getShelter: async (req, res) => {
    try {
      const refugios = await shelterService.getShelters();
      return res.send(refugios);
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
      return res.status(500).json({ message: error.message });
    }
  },
  editShelter: async (req, res) => {
    try {
      const data = req.body;
      const id = req.params._id;

      if (req.files && req.files.image) {
        if (!Array.isArray(req.files?.image)) {
          req.files.image = [req.files.image];
        }
        if (req.files?.image) {
          const imagesToUpload = [];
          for (const image of req.files.image) {
            const result = await uploadImage(image.tempFilePath);
            fs.unlink(image.tempFilePath);
            const folder = result.public_id;
            const url = result.secure_url;
            const imgs = { folder, url };
            imagesToUpload.push(imgs);
          }
          data.images = imagesToUpload;
        }
      }

      if (data.password) throw new Error("Can't change password");
      if (data.email) throw new Error("Can't change email address");
      const shelter = await shelterService.editShelter({ id, data });
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
      return res.status(500).json({ message: error.message });
      //
    }
  },
  shelterRegister: async (req, res) => {
    try {
      const data = req.body;

      if (req.files && req.files.image) {
        if (!Array.isArray(req.files?.image)) {
          req.files.image = [req.files.image];
        }
        if (req.files?.image) {
          const imagesToUpload = [];
          for (const image of req.files.image) {
            const result = await uploadImage(image.tempFilePath);
            fs.unlink(image.tempFilePath);
            const folder = result.public_id;
            const url = result.secure_url;
            const imgs = { folder, url };
            imagesToUpload.push(imgs);
          }
          data.images = imagesToUpload;
        }
      }
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

      res.status(200).json(newShelter);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "El correo electrónico ya está en uso" || error.message === "Falta información") {
          res.status(409).json(error.message);
        } else {
          res.status(500).json({ error: "Hubo un problema en el servidor" });
        }
      }
    }
  },
  login: async (req, res) => {
    try {
      const data = req.body;
      const shelterUser = await shelterService.login(data);
      if (!shelterUser) throw new Error("Usuario o contraseña incorrectos");
      const token = generateToken(shelterUser._id);
      res.status(200).json({ token, shelterUser });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
};

export default shelterController;
