require('dotenv').config();
const mongoose = require('mongoose');


const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/biblioteca';


async function resetCollections() {
    try {
        await mongoose.connect(MONGO);
        console.log('Conectado ao Mongo para resetar as colecoes');

        await mongoose.connection.db.dropDatabase();
        console.log('Banco de dados limpo');

        process.exit(0);
    } catch (err) {
        console.error('Erro ao resetar coleções', err);
        process.exit(1);
    }
}


resetCollections();