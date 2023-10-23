import express from "express";
import mongoDbConfig from "./config/dbConnect.js";

// Chama a função que se conecta no mongoDB
const mongoConnection = await mongoDbConfig();
// on normalmente é para eventos
mongoConnection.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})
mongoConnection.once("open", () => {
    console.log("Conexão realizada");
})

// Atribuindo todo conteúdo, bibliotecas do express na variável app
const app = express();
// Verifica se na solicitação foi passado objeto JSON e torna-os acessíveis na response
app.use(express.json());

const carros = [
    {
        "id": 1,
        "modelo": "Ford Ka"
    },
    {
        "id": 2,
        "modelo": "Corolla"
    }
];

// Está passando na resposta o código 200 com o conteúdo do response (variavel carros) com id opcional
app.get("/", (req, res) => {
    res.status(200).json(carros);
});

// Está passando na resposta o código 200 com o conteúdo do response (variavel carros) com id opcional
app.get("/:id", (req, res) => {
    res.status(200).json(carros[Number(req.params.id)]);
});

// Adicionará o carro no array carros pelo JSON recebido da request (app.use(express.json() transforma em JSON internamente ao invés de chegar como string) 
app.post("/add", (req, res) => {
    carros.push(req.body);
    res.status(201).send("Modelo de carro cadastrado com sucesso!");
});

app.patch("/update/:id", (req, res) => {
    carros[parseInt(req.params.id)].modelo = req.body.modelo;
    res.status(200).json(carros);
});

app.delete("/delete/:id", (req, res) => {
    carros.splice(Number(req.params.id), 1);
    res.status(200).send("Livro deletado com sucesso!");
});

// Exportar o módulo para ser acessível no server.js
export default app;