'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fight = sequelize.define('Fight', {
    knockdowns: DataTypes.INTEGER,
    attempted_strikes: DataTypes.INTEGER,
    strikes_landed: DataTypes.INTEGER,
    sig_attempt: DataTypes.INTEGER,
    sig_landed: DataTypes.INTEGER,
    takedowns_attempted: DataTypes.INTEGER,
    takedowns: DataTypes.INTEGER,
    submission_attempts: DataTypes.INTEGER
  }, {});
  Fight.associate = function(models) {
    // associations can be defined here
  };
  return Fight;
};