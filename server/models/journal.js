'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Journal.belongsTo(models.User, {as: 'users', foreignKey: 'user_id'})
      models.Journal.belongsTo(models.Activity, {as: 'activities', foreignKey: 'activity_id'})
    }
  };
  Journal.init({
    entry: DataTypes.TEXT,
    image: DataTypes.TEXT,
    video: DataTypes.TEXT,
    rating: DataTypes.STRING,
    activity_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    public: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Journal',
  });
  return Journal;
};