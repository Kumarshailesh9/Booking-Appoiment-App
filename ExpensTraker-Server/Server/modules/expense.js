const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product: {
        type: Sequelize.STRING,
        allowNull: false
    },
    option: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


sequelize
    .sync()
    .then(res => {
        console.log('Table is created!');
       
    }) .catch(err => {
        console.log(err);
    })


module.exports = Expense;