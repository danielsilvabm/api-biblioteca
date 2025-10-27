import User from "../models/User.js";

// cadastra novo usuario
export const createUser = async (req, res) => {
  try {
    const { name, birthDate, sex, address } = req.body;

    
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ error: "Usuário já cadastrado!" });
    }

    const user = new User({ name, birthDate, sex, address });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lista todos os usuarios
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
