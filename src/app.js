const express = require('express');
const cors = require('cors');


const authorsRoutes = require('./routes/authors');
const usersRoutes = require('./routes/users');
const booksRoutes = require('./routes/books');
const loansRoutes = require('./routes/loans');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/authors', authorsRoutes);
app.use('/users', usersRoutes);
app.use('/books', booksRoutes);
app.use('/loans', loansRoutes);


app.get('/', (req, res) => res.json({ ok: true, message: 'Biblioteca API' }));


module.exports = app;