const { Sequelize } = require("sequelize");

//create model
module.exports = (sequelize, Sequelize) => {
  const City = sequelize.define(
    "City",
    {
      Name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      Country: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return City;
};
