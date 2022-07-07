const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReturnMessage extends Model {}

ReturnMessage.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        return_message_text: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
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
        sendMessage_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'sendMessage',
            key: 'id'
          }
        }
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
      }
    );
    
    module.exports = ReturnMessage;