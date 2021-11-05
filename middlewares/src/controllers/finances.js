import { mockFinances } from '../mockDatabase.js';

async function listFinances (req, res) {
    res.send(mockFinances);
}

async function insertRevenue (req, res) {
    const revenue = {
        id: mockFinances.length,
        description: req.body?.description,
        value: req.body?.value,
        type: 'revenue'
    }
    mockFinances.push(revenue)
    res.sendStatus(200);
}

async function insertExpense (req, res) {
    const expense = {
        id: mockFinances.length,
        description: req.body?.description,
        value: req.body?.value,
        type: 'expense'
    }
    mockFinances.push(expense)
    res.sendStatus(200);
}

export {
    listFinances,
    insertRevenue,
    insertExpense,
}