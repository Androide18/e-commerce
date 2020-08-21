const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('categories', {
    name: {
      type: DataTypes.ENUM('Abrigos', 'Pantalones', 'Camisas', 'Remeras', 'Accesorios'),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
};