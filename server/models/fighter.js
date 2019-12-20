'use strict';
const fetch = require('node-fetch');
module.exports = (sequelize, DataTypes) => {
  const Fighter = sequelize.define('Fighter', {
    api_id: DataTypes.STRING,
    name: DataTypes.STRING,
    // weight_class: DataTypes.STRING
  }, {});
  Fighter.associate = function(models) {
    // associations can be defined here
  };

  Fighter.amassNames = async function(){
    let allSeasons = await sequelize.models.Season.findAll({raw: true});
    // let fighters = [];
    
    // allSeasons = allSeasons.slice(0,2);

    // allSeasons.map((season) => {
    //   console.log(season.api_id)
    // })
    allSeasons.map((season) => {
      fetch(`https://api.sportradar.us/ufc/trial/v2/en/seasons/${season.api_id}/info.json?api_key=`)
        .then(res => res.json())
        .then(json => json["competitors"])
        .then(res => {
          
          res.map(async(fighter) => {
            // console.log(fighter);
            let newFighter = await Fighter.findOne({ where: { api_id: fighter["id"] }, raw: true });
            if (!newFighter) {
              await Fighter.create({ api_id: fighter["id"], name: fighter["name"] });
            } else {
              console.log(newFighter.name);
            };
          })
        }).catch((res, err) => console.log(res));

        
    });
    
  }
  return Fighter;
};