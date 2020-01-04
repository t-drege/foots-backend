'use strict';

module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        date: DataTypes.DATE,
        sexe: DataTypes.INT,
    }, {
        underscored: true,
        sync: {force: true},
    });
    Player.associate = function (models) {
        Player.belongsTo(models.Team);
    };
    return Player;
};


