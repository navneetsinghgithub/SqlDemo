const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    phone: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
