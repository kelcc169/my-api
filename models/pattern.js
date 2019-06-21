'use strict';
module.exports = (sequelize, DataTypes) => {
  const pattern = sequelize.define('pattern', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    difficulty: DataTypes.INTEGER,
    weight: DataTypes.STRING,
    yardage: DataTypes.INTEGER
  }, {});
  pattern.associate = function(models) {
    // associations can be defined here
  };
  return pattern;
};