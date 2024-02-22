import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
    name: {
        type:String, 
        required: true,
        trim: true,
        maxlength: 20, 
        validate: {
            validator: (value) => /^[a-zA-Z]+$/.test(value),
            message: 'El nombre solo debería ser letras'
          }
    }, 
    gender:{
        type:String, 
        required: true,
        enum:['Macho', 'Hembra']
    },
    size:{
        type:String, 
        required: true,
        enum:['Pequeño', 'Mediano', 'Grande']
    },
    pet_type: {
        type:String, 
        required: true,
        enum:['Perro','Gato'], 
    },
    age: {
        type:Number, 
        required: true, 
        min: 0, 
        validate: {
            validator: (value) => value >= 0,
            message: `Debes ingresar un valor igual o mayor a 0`
          }
    },
    characteristics: {
        type: String, 
        required: true, 
        enum:['Calmado','Jugueton','Alegre','Tranquilo','Cariñoso', 'Guardian']
    }, 
    description: {
        type: String, 
        require: true, 
    },
    shelter: {
        type:String, 
        required: true,
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

    // id_fundation:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Refugio'
    // }
    status: {
        type:Boolean, 
        required: true, 
        default:true
    },
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
})

export default mongoose.model("Pet", petsSchema);
