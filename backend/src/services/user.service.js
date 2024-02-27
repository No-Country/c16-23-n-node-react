
import jwt from 'jsonwebtoken';
import User from "../models/user.js"

const generateTokens = async (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
  return token;
}

const userService = {
  createUser: async (data) => {
    try {

      const { email } = data
      const emailIsDuplicated = await User.findOne({email})
      if(emailIsDuplicated) throw new Error('Email is already in use');
      let user = await User.create(data);
      user = { firstName: user.firstName, lastName: user.lastName, email: user.email, phone: user.phone}
      return user

    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  editUser: async (data) => {
    try {
      let user = await User.findByIdAndUpdate(data.id, data, { new: true });

      user = { firstName: user.firstName, lastName: user.lastName, email: user.email, phone: user.phone}
      return user

    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
  login: async (data) => {
    try {


      const { email, password } = data
      let user = await User.findOne({email})
      if(!user) throw new Error('Email not found');
      if (await user.verifyPassword(password)) {
        const token = await generateTokens(user._id);
        user = { 
          firstName: user.firstName, 
          lastName: user.lastName, 
          email: user.email, 
          phone: user.phone, 
          _id: user._id, 
          token
        }
        return user
      } else {
        throw new Error('Password is wrong');

      }
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  },
}

export default userService

