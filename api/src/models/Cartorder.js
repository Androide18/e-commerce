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
        paymentId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });
};


