const express = require('express');

const router = express.Router();
const myController = require('../controller/expenseControl');


router.get('/expense' ,myController.getExpense);

router.post('/expense',  myController.postExpense);

router.delete('/expense/:id', myController.deleteExpense);



module.exports = router;