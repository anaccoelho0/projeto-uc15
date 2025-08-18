const produtoRepository = require('../repositories/produtoRepository');

class ProdutoService {

    async createProduto(produtoData){
        if(!produtoData.nome || !produtoData.preco) {
            throw new Error("Nome e preco do produto são obrigatórios");
        }
        const produto = await produtoRepository.save(produtoData);
        return produto;
    }

    async findAllProdutos(){
        const produtos = await produtoRepository.findAll();
        return produtos;
    }

    async findProdutoById(id){
        const produto = await produtoRepository.findById(id);
        return produto;
    }

    async updateProduto(id, produtoData){
       const produto = await produtoRepository.update(id, produtoData);
       return produto;
    }

    async deleteProduto(id){
        const produto = await produtoRepository.delete(id);
        return produto;
    }
}

module.exports = new ProdutoService();