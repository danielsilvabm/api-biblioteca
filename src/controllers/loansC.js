import Loan from "../models/Loan.js";
import Book from "../models/Book.js";
import User from "../models/User.js";

// fazendo um empréstimo
export const createLoan = async (req, res) => {
  try {
    const { user, book } = req.body;

    const userFound = await User.findById(user);
    const bookFound = await Book.findById(book);

    if (!userFound || !bookFound) {
      return res.status(404).json({ error: "Usuário ou livro não encontrado!" });
    }

    // se esta disponível
    if (!bookFound.isAvailable) {
      
      if (bookFound.expectedReturnDate && new Date(bookFound.expectedReturnDate) < new Date()) {
        bookFound.isAvailable = true;
      } else {
        return res.status(400).json({ error: "Livro já está emprestado!" });
      }
    }

    // Cria novo empréstimo
    const loanDate = new Date();
    const returnDate = new Date(loanDate);
    returnDate.setDate(returnDate.getDate() + 3); 

    const newLoan = new Loan({
      user: userFound.name,
      book: bookFound.title,
      loanDate: loanDate.toISOString().split("T")[0],
      returnDate: returnDate.toISOString().split("T")[0],
    });

    await newLoan.save();

    
    bookFound.isAvailable = false;
    bookFound.expectedReturnDate = returnDate;
    await bookFound.save();

    res.status(201).json({
      message: "Empréstimo realizado com sucesso!",
      loan: newLoan
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
