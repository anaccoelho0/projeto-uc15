const produto = require('../models/produtoModel');

const produtos = [];
let currentID = 1;

class ProdutoRepository {

    save(produtoData) {
        const newProduto = new produto(currentID++, produtoData.nome, produtoData.preco);
        produtos.push(newProduto);
        return newProduto;
    }

    findAll() {
        return produtos;
    }

    findById(id) {
        return produtos.find(produto => produto.id === id);
    }

    update(id, produtoData) {
        const index = produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            const updatedProduto = new produto(id, produtoData.nome, produtoData.preco);
            produtos[index] = updatedProduto;
            return updatedProduto;
        }
        return null;
    }

    delete(id) {
        const index = produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            return produtos.splice(index, 1)[0];
        }
        return null;
    }
}
module.exports = new ProdutoRepository();