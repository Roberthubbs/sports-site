'use strict';
module.exports = (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    year: DataTypes.STRING,
    competition_id: DataTypes.STRING
  }, {});
  Season.associate = function(models) {
    // associations can be defined here
  };
  return Season;
};