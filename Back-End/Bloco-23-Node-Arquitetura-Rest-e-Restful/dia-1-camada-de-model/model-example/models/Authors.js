const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize);
};

const findById = async (id) => {
  const [
    authorData,
  ] = await connection.execute(
    'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?',
    [id],
  );

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return ({ id, firstName, middleName, lastName });
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  create,
}
