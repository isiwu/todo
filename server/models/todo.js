import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../connectdb";
import User from "./user";

class Todo extends Model {};

Todo.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  todo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: "Todo"
})

User.hasMany(Todo, {
  foreignKey: {
    allowNull: false,
    onDelete: "CASCADE",
  }
});
Todo.belongsTo(User);

export default Todo;