'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Activity.hasMany(models.Journal, {as: 'journals', foreignKey: 'activity_id'})
      models.Activity.hasMany(models.MyActivity, {as: 'myactivites', foreignKey: 'activity_id'})
    }
  };
  Activity.init({
    activity: DataTypes.STRING,
    description: DataTypes.TEXT,
    time_of_day: DataTypes.STRING,
    location: DataTypes.STRING,
    price_range: DataTypes.STRING,
    duration_range: DataTypes.STRING,
    participants: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};