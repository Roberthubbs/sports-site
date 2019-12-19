'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fighter = sequelize.define('Fighter', {
    api_id: DataTypes.STRING,
    name: DataTypes.STRING,
    weight_class: DataTypes.STRING
  }, {});
  Fighter.associate = function(models) {
    // associations can be defined here
  };
  return Fighter;
};