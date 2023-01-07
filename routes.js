import  express  from 'express';
import { insert, find, update, deletar } from '../controllers/clientControllers.js'

const app = express();
app.use(express.json());

//Homepage | Pagina Inicial
app.get('/', (req, res) => res.send('Homepage! | Pagina Inicial!'));


// Request for creating Book | Requisição para cadastrar um livro.
app.post('/books', async (req, res) => {
    await insert(req.body)
    res.status(200).send('Cliente cadastrado com sucesso!');
})

//Endpoint de consulta de clientes
app.get('/books', async (req, res) => {
    let clients = await find()
    res.status(200).json(clients)
})

//Endpoint de consulta de cliente pelo id
app.get('/books/:id', async (req, res) => {
    let clients = await find(req.params.id)    
    res.status(200).json(clients);

})



// Request to update Book | Requisição para atualizar o livro.
app.put('/books/:id', async (req, res) => {
    await update(req.params.id, req.body)
    res.status(200).send("Cadastro atualizado")
})


//Endpoint para excluir o cadastro de um cliente
app.delete('/books/:id', async(req,res) =>{
    await delete (req.params.id)
    res.status(200).send("O cliente foi excluido com sucesso!")
})

export default app