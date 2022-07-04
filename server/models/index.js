const User = require('./User');
const Transaction = require('./Transaction');
const Rent = require('./Rent');
const Product = require('./Product');
const Category = require('./Category');

//USER ASSOCIATIONS
User.hasMany(Product, {
    foreignKey: 'user_id' 
});

User.hasMany(Rent, {
    foreignKey: 'user_id' 
});


//PRODUCT ASSOCIATIONS
Product.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'SET NULL'
});

//CATEGORY
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

//TRANSACTION
Transaction.belongsTo(Rent);

//RENT
Rent.hasOne(Transaction, {
    foreignKey: 'trxn_id'
});

Rent.hasOne(Product, {
    foreignKey: 'product_id'
});

Rent.belongsToMany(User,)

