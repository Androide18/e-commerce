const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('orderline', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
      },
        price: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
        { timestamp: false }
    );
};
