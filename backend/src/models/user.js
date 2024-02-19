import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    // dni: {
    //     type: String,
    //     trim: true,
    //     default: ""
    // },
    phone: {
        type: String,
        trim: true,
        default: ""
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // username: {
    //     type: String,
    //     trim: true,
    //     default: null,
    //     unique: true
    // },
    password: {
        type: String,
        trim: true,
        required: true
    },
    state: {
        type: String,
        required: true,
        enum: ['active','blocked'],
        default: 'active'
    },
    }, {
    timestamps: true,
    versionKey: false
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  userSchema.methods.verifyPassword = async function (pass) {
    return await bcrypt.compare(pass, this.password);
  };

export default mongoose.model("User", userSchema);