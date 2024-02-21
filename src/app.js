import express from "express";
import connectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectNaDatabase();

conexao.on("error", (erro) =>{
    console.error("Erro  de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
routes(app);

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

export default app;




