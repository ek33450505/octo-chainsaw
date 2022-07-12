const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {}

Message.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        message_text: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // username: {
        //   type: DataTypes.STRING,
        //   awwlowNull: false,
        //   references: {
        //     model: 'user',
        //     key: 'author_id'
        //   }
        // },
        recipient_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        product_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'product',
            key: 'id'
          }
        }
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Message'
      }
    );
    
    module.exports = Message;