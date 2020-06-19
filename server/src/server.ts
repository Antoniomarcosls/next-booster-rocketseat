import express, { request, response } from 'express'

const app = express();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

const users = [
    "Antonio",
    "Daniel",
    "Diego",
    "Roberto"
]

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    return response.json(users);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Gordo',
        email: 'gordo@gmail.com'
    }

    return response.json(user)
})

app.listen(3333);