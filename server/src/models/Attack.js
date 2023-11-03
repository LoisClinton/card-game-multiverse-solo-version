// The model name should be the same name as your model
// Use titlecase (i.e. uppercase) for the model name

// let Example = db.define("Example", {
// // Other code here
// })

// Use the following class diagrams to create your models.

const { Sequelize, db, Model, DataTypes } = require("../db/config");

class Attack extends Model {}

Attack.init(
  {
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "Attack",
  }
  // { freezeTableName: true }
);

module.exports = {
  Attack,
};
