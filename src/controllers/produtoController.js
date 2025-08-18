const ProdutoService = require("../services/produtoService");

class ProdutoController {
  async createProduto(req, res) {
    try {
      const produtoData = req.body;
      const produto = await ProdutoService.createProduto(produtoData);
      res.status(201).json(produto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async findAllProdutos(req, res) {
    try {
      const produtos = await ProdutoService.findAllProdutos();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProdutoById(req, res) {
    try {
      const id = parseInt(req.params.id);
      const produto = await ProdutoService.findProdutoById(id);
      if (produto) {
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: "Produto não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProduto(req, res) {
    try {
      const id = parseInt(req.params.id);
      const produtoData = req.body;
      const produto = await ProdutoService.updateProduto(id, produtoData);
      if (produto) {
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: "Produto não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProduto(req, res) {
    try {
      const id = parseInt(req.params.id);
      const produto = await ProdutoService.deleteProduto(id);
      if (produto) {
        res.status(200).json(produto);
      } else {
        res.status(404).json({ error: "Produto não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProdutoController();
