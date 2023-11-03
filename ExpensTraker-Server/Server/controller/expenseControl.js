const Expense = require('../modules/expense');

exports.getExpense = async (req ,res) => {
    const expense = await Expense.findAll();
    res.json(expense);
};

exports.postExpense = async (req,res) => {
    try {
        const price = req.body.price;
        const product = req.body.product;
        const option = req.body.option;

        const user = await Expense.create({
            price,
            product,
            option
        });
        res.json(user);
    } catch(error) {
        res.status(500).json({error: 'Failed to create User'});
    }
};

exports.deleteExpense = async (req, res) => {
    const id = req.params.id;
    try {
        const expense = await Expense.findByPk(id);
        if(!expense){
            return res.status(404).json({error: 'Expense not found'});
        }
        await expense.destroy();
        res.json({message: 'Expense deleted Succesfully'});
    } catch (error) {
        res.status(500).json({error: 'Failed To delete User'});
    }
    
};