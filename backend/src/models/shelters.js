import mongoose from "mongoose";
import bcrypt from "bcrypt";

const shelterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
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
    address: {
      type: String,
      required: false,
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

    emailVerified: {
      type: Boolean,
      default: false,
    },
    pets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
      },
    ],
    responsable: {
      type: String,
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
