const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rent extends Model { };

Rent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        renter_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        leaser_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        trxn_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'transaction',
                key: 'id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                customValidator(value) {
                    if (new Date(value) < new Date()) {
                        throw new Error("invalid date");
                    }
                },
            },
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                customValidator(value) {
                    if (new Date(value) < new Date()) {
                        throw new Error("invalid date");
                    }
                },
            },
        },
        notes: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'rent'
      }
);

module.exports = Rent;