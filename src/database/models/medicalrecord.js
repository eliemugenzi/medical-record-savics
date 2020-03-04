'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalRecord = sequelize.define('MedicalRecord', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    has_coronavirus: DataTypes.BOOLEAN
  }, {});
  MedicalRecord.associate = function(models) {
    // associations can be defined here
    MedicalRecord.belongsTo(models.User,{
      foreignKey: 'user_id',
      as: 'user'
    })
  };
  return MedicalRecord;
};