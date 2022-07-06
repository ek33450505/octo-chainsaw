const User = require('./User');
const Transaction = require('./Transaction');
const Rent = require('./Rent');
const Product = require('./Product');
const Category = require('./Category');

//USER ASSOCIATIONS
User.hasMany(Product, {
    foreignKey: 'user_id' 
});

// User.hasMany(Rent, {
//     foreignKey: 'user_id' 
// });


//PRODUCT ASSOCIATIONS
Product.belongsTo(User, {
    foreignKey: {name: 'user_id', unique: false}
});

Product.belongsTo(Category, {
    foreignKey: {name: 'category_id', unique: false}
});

//CATEGORY
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

//TRANSACTION
Transaction.belongsTo(Rent, {
    foreignKey: 'rent_id'
});

//RENT
Rent.hasOne(Transaction, {
    foreignKey: 'trxn_id'
});

Rent.hasOne(Product, {
    foreignKey: 'product_id'
});

Rent.belongsToMany(User, {
    through: "users_rent",
    as: "users",
    foreignKey: "user_id"
});

User.belongsToMany(Rent, {
    through: "users_rent",
    as: "rents",
    foreignKey: "rent_id"
});

module.exports = {User, Category, Product, Rent, Transaction};