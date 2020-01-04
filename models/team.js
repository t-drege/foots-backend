'use strict';
module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        logo: DataTypes.STRING
    }, {
        sync: {force: true},
    });
    Team.associate = function (models) {
       Team.belongsTo(models.Ligue);
    };
    return Team;
};