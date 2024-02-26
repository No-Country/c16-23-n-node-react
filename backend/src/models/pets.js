import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    validate: {
      validator: (value) => /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(value),
      message: "El nombre solo debería ser letras y espacios. Debe incluir al menos una letra.",
    },
  },
  pet_type: {
    type: String,
    required: true,
    enum: ["Perro", "Gato"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Macho", "Hembra"],
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: (value) => value > 0 && value <= 50,
      message: `Debes ingresar un valor mayor a 0 y hasta 50. Puede incluir 0.# para los meses`,
    },
  },
  size:{
    type: String,
    required: true,
    enum: ["Pequeño", "Mediano", "Grande"],
  },
  characteristics: {
    type: String,
    required: true,
    enum: ["Calmado", "Jugueton", "Alegre", "Tranquilo", "Cariñoso", "Guardian"],
  },
  shelter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelter",
  },
  adoption_status: {
    type: Boolean,
    required: true,
    default: true,
  },
  images: [
    {
      url: {
        type: String,
      },
      folder: {
        type: String,
      },
    },
  ],
  // adoption_data:{
  //     type:,
  //     required: true,
  //     default: true
  // },
  //   adopter:{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User',
  //     default:null
  // }
});

export default mongoose.model("Pet", petsSchema);
