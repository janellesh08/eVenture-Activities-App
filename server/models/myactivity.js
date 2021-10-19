'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyActivity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.MyActivity.belongsTo(models.User, {as: 'users', foreignKey: 'user_id'})
      models.MyActivity.belongsTo(models.Activity, {as: 'activity', foreignKey: 'activity_id'})
    }
  };
  MyActivity.init({
    activity_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    activity_title: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'MyActivity',
  });
  return MyActivity;
};