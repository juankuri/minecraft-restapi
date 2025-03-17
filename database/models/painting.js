'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Painting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Painting.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    width: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    artist: DataTypes.STRING,
    game_version: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Painting',
  });
  return Painting;
};