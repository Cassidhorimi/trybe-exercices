const books = (sequelize, DataTypes) => {
  const books = sequelize.define("books", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

  return books;
};

module.exports = books;