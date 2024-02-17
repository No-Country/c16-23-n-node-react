import Shelters from "../../models/shelters.js";
import { Resend } from "resend";
import jwt from "jsonwebtoken";

// Crea una instancia de Resend fuera del controlador
const resend = new Resend("re_Z6Mmk8fu_5oPc5sBvdE7UjBfooJZ92P2k");
const shelterRegister = async (req, res) => {
  try {
    const { userName, email, password, adress, name } = req.body;
    const newShelter = new Shelters({ userName, email, password, adress, name });
    console.log(newShelter);
    const token = jwt.sign({ email: email }, "secreto", { expiresIn: "1h" });
    newShelter.verificationToken = token;
    await newShelter.save();

    const verificationLink = `https://tu-aplicacion.com/verify-email?token=${token}`;
    // Después de registrar al usuario, envía el correo electrónico
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: `¡Bienvenido a nuestra aplicación! Gracias por Registrar tu refufio ${userName} Por favor, verifica tu correo electrónico.`,
      html: `<p>Hola ${userName}, ¡gracias por registrarte en nuestra aplicación! Haz clic en el siguiente enlace para verificar tu correo electrónico:</p><p><a href="${verificationLink}">${verificationLink}</a></p>`,
    });

    if (error) {
      return res.status(400).json({ error: "Error al enviar el correo electrónico" });
    }

    // Si el correo se envió correctamente, responde con éxito
    res.status(200).json({ message: "Usuario registrado exitosamente y correo electrónico enviado" });
  } catch (error) {
    console.error(error); // Imprimir el error en la consola del servidor
    res.status(500).json({ error: "Error interno del servidor", message: error.message }); // Devolver el error al cliente
  }
};

export default shelterRegister;
