const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
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

function update(changes, id) {
    return db('schemes')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db('schemes')
    .where({id})
    .del()
}

// function addStep(stepData, id) {
//     return db('steps')
//         .insert()
// }