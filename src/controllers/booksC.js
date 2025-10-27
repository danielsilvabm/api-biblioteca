import Book from "../models/Books.js";
import Author from "../models/Author.js";

// Cadastra novo livro
export const createBook = async (req, res) => {
  try {
    const { title, synopsis, year, author } = req.body;

    // verifica se o autor existe
    const existingAuthor = await Author.findById(author);
    if (!existingAuthor) {
      return res.status(400).json({ error: "Autor não encontrado!" });
    }

    const book = new Book({
      title,
      synopsis,
      year,
      author,
      isAvailable: true,
      expectedReturnDate: null
    });

    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// lista todos os livros
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author", "name writingGenre");
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
