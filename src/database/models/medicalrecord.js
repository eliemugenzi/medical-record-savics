'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalRecord = sequelize.define('MedicalRecord', {
    user - id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    has_coronavirus: DataTypes.BOOLEAN
  }, {});
  MedicalRecord.associate = function(models) {
    // associations can be defined here
  };
  return MedicalRecord;
};