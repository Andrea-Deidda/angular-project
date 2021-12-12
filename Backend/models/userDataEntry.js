'use strict';

module.exports = (sequelize, DataType) => {
  let UserDataEntry = sequelize.define('UserDataEntry', {
    // id missing because Sequelize adds it by default
    name:  DataType.STRING(100),
    surname: DataType.STRING(100)
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'user'
  });

  // Association to other models (foreign keys)
  UserDataEntry.associate = function (models) {

  };

  return UserDataEntry;
};
