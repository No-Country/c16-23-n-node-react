import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
    validate: {
      validator: (value) => /^[a-zA-Z\s]+$/.test(value),
      message: "El nombre solo debería ser letras",
    },
  },
  pet_type: {
    type: String,
    required: true,
    enum: ["Perro", "Gato"],
  },
  
  age: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: (value) => value >= 0,
      message: `Debes ingresar un valor igual o mayor a 0`,
    },
  },
  gender: {
    type: String,
    required: true,
    enum: ["Macho", "Hembra"],
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
  status: {
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
