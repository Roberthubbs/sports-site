'use strict';

const fetch = require('node-fetch');
module.exports = (sequelize, DataTypes) => {
  const Season = sequelize.define('Season', {
    api_id: DataTypes.STRING,
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    year: DataTypes.STRING,
    competition_id: DataTypes.STRING
  }, {});
  Season.associate = function(models) {
    // associations can be defined here
  };

  Season.populateSeasons = async function(){
    let seasons; 
    await fetch("https://api.sportradar.us/ufc/trial/v2/en/seasons.json?api_key=")
      .then((res) => res.json())
      .then(json => seasons = json);

    seasons["seasons"].map(async(season) => {
      let mySeason = await Season.findOne({where: {name: season["name"]}});
      if (!mySeason){
        return Season.create({
          api_id: season["id"], 
          name: season["name"], 
          start_date: season["start_date"],
          end_date: season["end_date"],
          year: season["year"],
          competition_id: season["competition_id"]
        })
      };
      
    });
    
  }
  return Season;
};