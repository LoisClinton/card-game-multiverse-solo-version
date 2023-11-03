// The model name should be the same name as your model
// Use titlecase (i.e. uppercase) for the model name

// let Example = db.define("Example", {
// // Other code here
// })
// Use the following class diagrams to create your models.

const { Sequelize, db, Model, DataTypes } = require("../db/config");

class Deck extends Model {}

Deck.init(
  {
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "Deck",
  }
  // { freezeTableName: true }
);

module.exports = {
  Deck,
};
