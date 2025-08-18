const express = require('express');
const app = express();
const port = 3000;


const ProdutoController = require('./src/controllers/produtoController');

app.use(express.json());




app.post('/produtos', (req, res) => {
  ProdutoController.createProduto(req, res);
});

app.get('/produtos', (req, res) => {
  ProdutoController.findAllProdutos(req, res);
});

app.get('/produtos/:id', (req, res) => {
  ProdutoController.getProdutoById(req, res);
});


app.put('/produtos/:id', (req, res) => {
  ProdutoController.updateProduto(req, res);
});

app.delete('/produtos/:id', (req, res) => {
  ProdutoController.deleteProduto(req, res);
});

app.listen(port, () => {
  console.log(`A API está rodando em http://localhost:${port}`);
});
