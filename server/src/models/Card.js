// The model name should be the same name as your model
// Use titlecase (i.e. uppercase) for the model name

// let Example = db.define("Example", {
// // Other code here
// })
// Use the following class diagrams to create your models.

const { Sequelize, db, Model, DataTypes } = require("../db/config");

class Card extends Model {}

Card.init(
  {
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Card",
  },
  // { freezeTableName: true }
);

module.exports = {
  Card,
};
