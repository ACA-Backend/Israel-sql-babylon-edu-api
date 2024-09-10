import { sequelize } from "../../config/db.config.js";
import { DataTypes } from "sequelize";
import argon from "argon2";

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Password cannot be an empty string",
      },
    },
  },
  role: {
    type: DataTypes.ENUM(["user", "admin", "super admin"]),
    defaultValue: "user",
  },
});

User.beforeCreate(async (user) => {
  user.password = await argon.hash(user.password);
});

export default User;
