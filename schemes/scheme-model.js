const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add
}

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
        .where({id})
        .first()
}

function findSteps(id) {
    return db('steps as s')
        .join('schemes as c', 'c.id', 's.scheme_id')
        .select('s.id', 's.step_number', 's.instructions', 'c.scheme_name', 'c.id')
        .where('s.scheme_id', id)
        .orderBy('s.step_number')
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => {
        return findById(ids[0]);
    })
}