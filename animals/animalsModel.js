const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(animal) {
  return db('animals')
    .insert(animal, 'id')
    .then(ids => {
      return db('animals')
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return undefined;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('animals');
}

function findById(id) {
  return null;
}