import { Books } from "../models/schemaModel.js";


export async function insertBook(object) {
    const book = new Books(object);
    try {
        await book.save();
    } catch (error) {
        console.error(error)
    }
}

export async function findBook (id) {
    if (!id) {
        return Books.find();
    } else {
        let book = await Books.findOne({ _id: id });
        return book;
    }
}

export async function updateBook (id, object) {
    try {
        await Books.findOneAndUpdate({ _id: id }, object);
    } catch (error) {
        console.error(error);
    }
}

export async function deleteBook (id) {
    try {
        await Books.findOneAndDelete({ _id: id });
    } catch (error) {
        console.error(error);
    }
}

