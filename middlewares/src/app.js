import express from "express";
import cors from "cors";
import { signIn } from "./controllers/sign-in.js";
import { listFinances, insertRevenue, insertExpense } from "./controllers/finances.js";
import ensureAuth from "./middlewares/ensureAuth.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/status", async (req, res) => {
    res.sendStatus(200);
});

app.post('/sign-in', signIn);

app.get('/finances', ensureAuth, listFinances);
app.post('/finances/revenue', ensureAuth, insertRevenue);
app.post('/finances/expense', ensureAuth, insertExpense);

export default app;