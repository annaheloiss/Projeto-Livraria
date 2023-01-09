//Import the moongose module | Importando o modulo do moongose
import { mongoose } from "mongoose";
mongoose.set('strictQuery', true);

//Get the default connection | Url default
//Bind connection to error or connection event (to get notification of connection) | Notificação de erro ou conexão.

const urlDatabase = 'mongodb+srv://project:P8mt1TKyqRMwiCjU@project.lrwp24m.mongodb.net/?retryWrites=true&w=majority';

export const startDB = () => {
    mongoose.connect(urlDatabase, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    
    const db = mongoose.connection;
    db.on("error", () => console.error("MongoDB connection error"));
    db.once("open", () => console.log("Connected with the MongoDB"));
};


