'use strict';

module.exports = (sequelize, DataTypes) => {
    const Ligue = sequelize.define('Ligue', {
        name: DataTypes.STRING,
    }, {
        underscored: true,
        sync: {force: true},
    });
    Ligue.associate = function (models) {
        //Player.belongsTo(models.Team);
    };
    return Ligue;
};