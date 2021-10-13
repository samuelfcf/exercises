import express from 'express';
import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
  user: 'bootcamp_role',
  host: 'localhost',
  port: 5432,
  database: 'exercicio_mystoreultrasystem_3a28727e',
  password: 'senha_super_hiper_ultra_secreta_do_role_do_bootcamp'
});

const app = express();
app.use(express.json());

app.get('/api/products', (req, res) => {
  connection.query('SELECT * FROM produtos;').then(produtos => {
    res.send(produtos.rows);
  });
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  connection.query("SELECT * FROM produtos WHERE id = $1;", [id])
    .then(result => {
      if (!result.rows[0]) {
        res.status(404).send("Erro!!!");
      }
      res.status(200).send(result.rows[0])
    });
});

app.post('/api/products', (req, res) => {
  const { nome, preco, condicao } = req.body;

  connection.query("INSERT INTO produtos (nome, preco, condicao) VALUES ($1, $2, $3);", [nome, preco, condicao])
    .then(result => {
      res.status(201).send("deu certo!!!")
    })
});

app.listen(4000, () => {
  console.log('Server listening on port 4000.');
});
