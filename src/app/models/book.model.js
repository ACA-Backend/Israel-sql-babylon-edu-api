// models/book.js
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // The title cannot be empty
      },
      isbn: {
        type: DataTypes.STRING,
        unique: true, // ISBN must be unique
        allowNull: false,
      },
      publishedDate: {
        type: DataTypes.DATE, // Date the book was published
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Each book must be associated with an author
      },
    });
  
    // A book belongs to an author
    Book.associate = (models) => {
      Book.belongsTo(models.Author, { foreignKey: 'authorId' });
    };
  
    return Book;
  };
  