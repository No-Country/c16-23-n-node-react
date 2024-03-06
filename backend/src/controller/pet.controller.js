import petService from "../services/pet.service.js";
import fs from "fs-extra";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { uploadImage, deleteImage } from "../helpers/cloudinary.js";
import nodemailer from "nodemailer";

const petController = {
  createPet: async (req, res) => {
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

      const pet = await petService.createPet(data);
      return res.status(201).json(pet);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  getPets: async (req, res) => {
    try {
      const pets = await petService.getPets();
      if (pets.length === 0) {
        return res.status(200).send("No hay mascotas para mostrar");
      } else {
        return res.status(200).json(pets);
      }
      // return res.status(200).send({"La cantidad de Mascotas es ": pets.length, pets});
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  getPetById: async (req, res) => {
    try {
      const id = req.params;
      const petFound = await petService.getPetById(id);
      if (petFound === null) {
        return res.status(200).send(`No se encontró mascotas`);
      }
      return res.status(200).json(petFound);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  getPetsByFilters: async (req, res) => {
    try {
      const { size, pet_type, gender, characteristics } = req.query;
      const filters = {};
      if (size) filters.size = size;
      if (pet_type) filters.pet_type = pet_type;
      if (gender) filters.gender = gender;
      if (characteristics) {
        if (Array.isArray(characteristics)) {
          filters.characteristics = { $in: characteristics };
        } else {
          filters.characteristics = characteristics;
        }
      }
      const petsByFilters = await petService.getPetsByFilters(
        filters.size,
        filters.pet_type,
        filters.gender,
        filters.characteristics
      );
      if (petsByFilters.length === 0) {
        return res.status(404).json({ message: `No se encontraron Mascotas ${size}s ` });
      }
      return res.status(200).json(petsByFilters);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  editPetById: async (req, res) => {
    try {
      const data = req.body;
      data.id = req.params._id;
      console.log(data.id);
      const pet = await petService.editPetById(data);
      console.log(data);
      return res.status(200).json(pet);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  deletePetById: async (req, res) => {
    try {
      const id = req.params._id;
      const pet = await petService.deletePetById({ id });
      console.log(pet);
      return res.status(200).json(pet);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  adoptPetById: async (req, res) => {
    try {
      const id = req.params._id;

      const pet = await petService.getPetById(id);
      const { body } = req;

      const authHeader = req.headers.bearer;

      if (!authHeader) {
        return res.status(401).json({ error: "Token de autenticación vacío" });
      }

      const decodedToken = jwt.verify(authHeader, process.env.JWT_SECRET);

      const userId = decodedToken.id;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      if (!pet.shelter_id) {
        return res.status(404).json({ error: "mascota sin refugio" });
      }
      // envio de mail
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "conexionhuellitas@gmail.com",
          pass: process.env.NODEMAILER,
        },
      });

      const mailOptions1 = {
        from: "conexionhuellitas@gmail.com",
        to: user.email,
        subject: "Confirmación de Proceso de adopción",
        text: `¡Hola ${user.firstName} ${user.lastName}!`,
        html: `<div style="font-family: Arial, sans-serif; color: #333;">
    
            <h2 style="color: #4CAF50;">¡Gracias por iniciar el proceso de adopción! 🎉</h2>
            <h3 style="color: #4CAF50;">Hola ${user.firstName} ${user.lastName},</h3>
            
            <p>Estamos emocionados de informarte que has iniciado el proceso de adopción para ${pet.name}, una ${pet.pet_type} de ${pet.age} años de edad, ${pet.size} y ${pet.gender}.</p>
    
            <p>Tu amor y consideración para con ${pet.name} significan mucho para nosotros y para la mascota. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo en breve para continuar con el proceso de adopción.</p>
    
            <p>¡Gracias por elegir darle una oportunidad a ${body.hola} y por tu compromiso con el bienestar animal!</p>
    
            <p>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.</p>
    
            <p>Con cariño,</p>
            <p>El equipo de Huellitas 🐾</p>
    
        </div>`,
      };
      const mailOptions2 = {
        from: "conexionhuellitas@gmail.com",
        to: pet.shelter_id.email,
        subject: `Pedido de adopcion a ${pet.name}`,
        text: `¡Hola ${pet.shelter_id.userName}!`,
        html: `<div style="font-family: Arial, sans-serif; color: #333;">
    
            <h2 style="color: #4CAF50;">¡Gracias por iniciar el proceso de adopción! 🎉</h2>
            <h3 style="color: #4CAF50;">Hola ${pet.shelter_id.userName},</h3>
            
            <p>${pet.name}, una ${pet.pet_type} de ${pet.age} años de edad, ${pet.size} y ${pet.gender}.</p>
    
a    
            <p>${body.hola} ${body.a}  ${body.b} ${body.c} </p>
    
            <p>Con cariño,</p>
            <p>El equipo de Huellitas 🐾</p>
    
        </div>`,
      };
      transporter.sendMail(mailOptions1, (error, info) => {
        if (error) {
          console.log("Error al enviar el correo electrónico:", error);
        } else {
          console.log("Correo electrónico de validación enviado:", info.response);
        }
      });
      transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
          console.log("Error al enviar el correo electrónico:", error);
        } else {
          console.log("Correo electrónico de validación enviado:", info.response);
        }
      });

      pet.adopter = user._id;
      pet.adoption_status = false;

      await pet.save();

      await pet.populate("adopter");
      res.status(200).json(pet);
    } catch (error) {
      console.error("Error al adoptar mascota:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};

export default petController;
