import { Books } from "../models/schemaModel.js";


export async function create(object) {
    const book = new Books(object);
    try {
        await book.save();
    } catch (error) {
        console.error(error)
    }
}

export async function find (id) {
    if (!id) {
        return Books.find();
    } else {
        let book = await Books.findOne({ _id: id });
        return book;
    }
}

export async function update(id, object) {
    try {
        await Books.findOneAndUpdate({ _id: id }, object);
    } catch (error) {
        console.error(error);
    }
}

export async function deletar (id) {
    try {
        await Books.findOneAndDelete({ _id: id });
    } catch (error) {
        console.error(error);
    }
}

