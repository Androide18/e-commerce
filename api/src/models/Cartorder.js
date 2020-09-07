const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('cartorder', {
        state: {
            type: DataTypes.ENUM('cart', 'created', 'processing', 'cancelled', 'completed'),
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        totalQty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cardName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cardNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cvv: {
            type: DataTypes.STRING,
            allowNull: false,
        },        
    },
    {timestamp:false}
    );
};


