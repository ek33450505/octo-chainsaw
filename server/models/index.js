const User = require('./User');
const Transaction = require('./Transaction');
const Rent = require('./Rent');
const Product = require('./Product');
const Category = require('./Category');
const Message = require('./Message')


//USER ASSOCIATIONS
User.hasMany(Product, {
    foreignKey: 'user_id'
});

// User.hasMany(Rent, {
//     foreignKey: 'user_id' 
// });

//PRODUCT ASSOCIATIONS
Product.belongsTo(User, {
    foreignKey: { name: 'user_id', unique: false }
});

Product.belongsTo(Category, {
    foreignKey: { name: 'category_id', unique: false }
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
    through: 'users_rent',
    as: 'users',
    foreignKey: 'rent_id'
});

User.belongsToMany(Rent, {
    through: 'users_rent',
    as: 'rents',
    foreignKey: 'user_id'
});

// messages
Message.hasOne(Product, {
    foreignKey: 'product_id'
});

Message.belongsToMany(User, {
    through: 'users_message',
    as: 'message',
    foreignKey: 'message_id'
});

Message.belongsToMany(User, {
    through: 'users_message',
    as: 'username',
    foerignKey: 'author_id'
});



module.exports = { User, Category, Product, Rent, Transaction, Message };
