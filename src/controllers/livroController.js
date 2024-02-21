import livro from "../models/Livros.js";
import { autor } from "../models/Autor.js";

class LivroController {

    
    static async listaLivros (req, res){
        try {
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
        } catch (error) {
            console.log(error);
            res.status(500).json({message: `${error.message}- falha da requisição`})
        }
    };

    static async listaLivroPorId (req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        } catch (error) {
            console.log(error);
            res.status(500).json({message: `${error.message}- falha da requisição`})
        }
    };

    static async cadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrando = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrando._doc } };
            const livroCriado  = await livro.create(livroCompleto);
            res.status(201).json({message: "Criado com sucesso", livro: livroCriado});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao cadastrar livro`});
            console.log(error);
        }
    };

    static async atualizarLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body );
            res.status(200).json({ message: "Livros atualizado" });
        } catch (error) {
            console.log(error);
            res.status(500).json({message: `${error.message}- falha da requisição`})
        }
    };

    static async exluirLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro removido com êxito!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({message: `${error.message}- falha da exclusão.`})
        }
    };

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora)
        } catch(error){
            res.status(500).json({ message: `${error.message} - falha na busca` });
        }
    }

};  

export default LivroController;