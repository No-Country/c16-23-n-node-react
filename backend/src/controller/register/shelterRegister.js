import Shelters from "../../models/shelters.js";
import { Resend } from "resend";
import jwt from "jsonwebtoken";

// Crea una instancia de Resend fuera del controlador
const resend = new Resend("re_Z6Mmk8fu_5oPc5sBvdE7UjBfooJZ92P2k");
const shelterRegister = async (req, res) => {
  try {
    const { userName, email, password, address, website, name, images, responsable, description } = req.body;
    const existingUser = await Shelters.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "El correo electrónico ya está en uso" });
    }

    const newShelter = new Shelters({
      userName,
      email,
      password,
      address,
      name,
      images,
      responsable,
      description,
      website,
    });

    const token = jwt.sign({ email: email }, "secreto", { expiresIn: "1h" });
    newShelter.verificationToken = token;
    await newShelter.save();

    // const verificationLink = `http://localhost:3000/api/verify-email?token=${token}`;

    // const { data, error } = await resend.emails.send({
    //   from: "Acme <onboarding@resend.dev>",
    //   to: [email],
    //   subject: `¡Bienvenido a nuestra aplicación! Gracias por Registrar tu refufio ${userName} Por favor, verifica tu correo electrónico.`,
    //   html: `<p>Hola ${userName}, ¡gracias por registrarte en nuestra aplicación! Haz clic en el siguiente enlace para verificar tu correo electrónico:</p><p><a href="${verificationLink}">${verificationLink}</a></p>`,
    // });

    // if (error) {
    //   return res.status(400).json(error.message);
    // }

    res.status(200).json({ message: "Usuario registrado exitosamente y correo electrónico enviado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor", message: error.message }); // Devolver el error al cliente
  }
};

export default shelterRegister;
