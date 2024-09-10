// models/borrowedBook.js
module.exports = (sequelize, DataTypes) => {
    const BorrowedBook = sequelize.define('BorrowedBook', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Must be associated with a user
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Must be associated with a book
      },
      borrowedDate: {
        type: DataTypes.DATE,
        allowNull: false, // Date the book was borrowed
        defaultValue: DataTypes.NOW,
      },
      returnDate: {
        type: DataTypes.DATE, // Date the book was returned (can be null if not returned yet)
      },
    });
  
    // A borrowed book belongs to a user and a book
    BorrowedBook.associate = (models) => {
      BorrowedBook.belongsTo(models.User, { foreignKey: 'userId' });
      BorrowedBook.belongsTo(models.Book, { foreignKey: 'bookId' });
    };
  
    return BorrowedBook;
  };
  