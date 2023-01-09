import  express  from 'express';
import { insertBook, findBook, updateBook, deleteBook } from '../controllers/booksControllers.js'

const app = express();
app.use(express.json());

//Homepage | Pagina Inicial
app.get('/', (req, res) => res.send("Homepage! | Pagina Inicial!"));


// Request for creating Book | Requisição para cadastrar livro.
app.post('/books/insert', async (req, res) => {
    await insertBook(req.body)
    res.status(200).send("O livro foi cadatrado com sucesso!");
})

// Requisição para procurar livro.
app.get('/books/find', async (req, res) => {
    let books = await findBook()
    res.status(200).json(books)
})

 //Requisição para procurar livro através do id
    app.get('/books/:id', async (req, res) => {
    let books = await findBook(req.params.id)    
    res.status(200).json(books);

})



// Request to update Book | Requisição para atualizar o livro.
app.put('/books/update/:id', async (req, res) => {
    await updateBook(req.params.id, req.body)
    res.status(200).send("Livro atualizado com sucesso!")
})


//
app.delete('/books/delete/:id', async(req,res) =>{
    await deleteBook (req.params.id)
    res.status(200).send("O livro foi excluido com sucesso!")
})

export default app