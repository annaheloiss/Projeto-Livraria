import mongoose from 'mongoose';
const { Schema } = mongoose;

// Document Schema | Schema do documento ("tabela").

const librarySchema = new Schema({
    isbn: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    genres: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    }
});

//Export to create schemaModel | Exportando para criar o schemaModel.
export const Books = mongoose.model('Books', librarySchema);