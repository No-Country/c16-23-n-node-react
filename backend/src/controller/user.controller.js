import userService from "../services/user.service.js"

const userController = {
  createUser : async (req, res) => {
    try {
      const data = req.body
      const user = await userService.createUser(data)
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  editUser : async (req, res) => {
    try {
      const data = req.body
      data.id = req.params.id
      if(data.password) throw new Error("Can't change password");
      if(data.email) throw new Error("Can't change email address");
      const user = await userService.editUser(data)
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  login : async (req, res) => {
    try {
      const data = req.body
      const user = await userService.login(data)
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
  loginGoogle : async (req, res) => {
    try {
      const data = req.body
      const user = await userService.login(data)
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  },
}

export default userController