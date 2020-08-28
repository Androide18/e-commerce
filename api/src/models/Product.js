const { DataTypes, DATEONLY } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.STRING,
      allowNull:false
    },
    Stock: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Image: { 
      type: DataTypes.BLOB,
    },
    Category: {
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
};
