'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
   Address.belongsTo(models.User,{
     foreignKey: 'user_id',
     as: 'user'
   })
  };
  return Address;
};