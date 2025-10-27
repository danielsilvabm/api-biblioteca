require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3333;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/biblioteca';


mongoose.connect(MONGO)
.then(() => {
console.log('MongoDB conectado');
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
})
.catch(err => {
console.error('Erro ao conectar no MongoDB', err);
process.exit(1);
});