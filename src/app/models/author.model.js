// models/author.js
module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
      name: {
        type: DataTypes.STRING,
        allowNull: false, // The name cannot be empty
      },
      bio: {
        type: DataTypes.TEXT, // Short biography of the author
      },
      birthDate: {
        type: DataTypes.DATE, // Author's birth date
      },
    });
  
    // An author can write many books
    Author.associate = (models) => {
      Author.hasMany(models.Book, { foreignKey: 'authorId' });
    };
  
    return Author;
  };
  