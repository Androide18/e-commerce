const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('cartorder', {
        state: {
            type: DataTypes.ENUM('cart', 'created', 'processing', 'cancelled', 'completed', 'Uncreated'),
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
        
        
    },
    {timestamp:false}
    );
};


