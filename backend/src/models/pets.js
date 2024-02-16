import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
    pet_type: {
        type:String, 
        required: true,
        enum:['Perro','Gato'], 
    },
    name: {
        type:String, 
        required: true,
        trim: true,
        maxlength: 20, 
        validate: {
            validator: (value) => /^[a-zA-Z]+$/.test(value),
            message: 'El nombre de la mascota sólo debería ser letras'
          }
    }, 
    age: {
        type:Number, 
        required: true, 
        min: 0, 
        validate: {
            validator: (value) => {
                //Le coloqué una validación doble. Primero, revisa si se ingresó un valor no numérico
                //Segundo, es la validación que armamos el miércoles
                if (isNaN(value) || value >= 0) {
                    return false;
                }
                return true; 
            },
            message: 'Debes ingresar un valor igual o mayor a 0 y sólo valores numéricos'
          }
    },
    gender:{
        type:String, 
        required: true,
        enum:['Macho', 'Hembra']
    }, 
    characteristics: {
        type: String, 
        required: true, 
        enum:['Calmado','Juguetón','Alegre','Tranquilo','Cariñoso', 'Guardián']
    }, 
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
