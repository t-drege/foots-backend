'use strict';

module.exports = (sequelize, DataTypes) => {
    const Ground = sequelize.define('Ground', {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        date: DataTypes.DATE,
        sexe: DataTypes.INT,
    }, {
        underscored: true,
        sync: {force: true},
    });
    Ground.associate = function (models) {
       // Ground.belongsTo(models.Team);
    };
    return Player;
};


