import livro from "../models/Livros.js";

class LivroController {
    static async listaLivros (req, res){
        const listaLivros = await livro.find({})
        res.status(200).json(listaLivros)
    }

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Criado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar livro`});
            console.log(error);
        }
    }

};  

export default LivroController;