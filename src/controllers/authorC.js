import Author from "../models/Author.js";

// Cadastrar novo autor
export const createAuthor = async (req, res) => {
  try {
    const { name, birthDate, sex, writingGenre } = req.body;

    
    const existingAuthor = await Author.findOne({ name });
    if (existingAuthor) {
      return res.status(400).json({ error: "Autor já cadastrado!" });
    }

    const author = new Author({ name, birthDate, sex, writingGenre });
    await author.save();

    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lista todos os autores
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
