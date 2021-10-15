import express from 'express';

import connection from './database/database.js';

const app = express();
app.use(express.json());

app.get('/allocations', async (req, res) => {
  try {
    const result = await connection.query(`
      SELECT 
        rooms.*,
        allocations."startDate",
        allocations."endDate",
        guests.name 
      FROM rooms 
        JOIN allocations 
          ON rooms.id = allocations."roomId" 
        JOIN guests 
          ON guests.id = allocations."guestId";`)

    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

app.listen(4000, () => {
  console.clear()
  console.log('Server is listening on port 4000.');
});
