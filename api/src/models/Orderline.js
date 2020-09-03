const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('orderline', {

        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
        { timestamp: false }
    );
};
