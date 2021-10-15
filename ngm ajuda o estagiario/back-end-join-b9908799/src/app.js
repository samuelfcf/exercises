import express from 'express';

import connection from './database/database.js';

const app = express();
app.use(express.json());

app.get('/products/:id', async (req, res) => {
  try {
    // buscando o produto
    const products = await connection.query(`
      SELECT 
        products.*,
        categories.name AS "categoryName"
      FROM products 
        JOIN categories 
          ON products."categoryId" = categories.id
      WHERE products.id=$1
    `, [req.params.id]);

    if (!products.rows[0]) {
      return res.sendStatus(404);
    }

    res.send(products.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

app.get('/products', async (req, res) => {
  try {
    // buscando todos os produtos
    const products = await connection.query(
      `SELECT 
        products.*,
        categories.name AS "categoryName"
      FROM products 
        JOIN categories 
          ON products."categoryId" = categories.id`
    );
    res.send(products.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000.');
});
