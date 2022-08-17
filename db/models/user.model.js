

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("user", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      email: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      password: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'active'
    }
  });

  return User

}