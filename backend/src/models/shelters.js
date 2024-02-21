import mongoose from "mongoose";
import bcrypt from "bcrypt";

const shelterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    adress: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      required: false,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

shelterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

shelterSchema.methods.verifyPassword = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

export default mongoose.model("Shelter", shelterSchema);
