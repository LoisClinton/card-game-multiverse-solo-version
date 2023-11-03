// The model name should be the same name as your model
// Use titlecase (i.e. uppercase) for the model name

// let Example = db.define("Example", {
// // Other code here
// })
// Use the following class diagrams to create your models.

const { Sequelize, db, Model, DataTypes } = require("../db/config");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "User",
  },
  { freezeTableName: true }
);

module.exports = {
  User,
};
