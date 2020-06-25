const orm = require("../config/orm");


var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => cb(res))
    },

    insertOne: (col1, col2, val1, val2, cb) => {
        orm.insertOne("burgers", col1, col2, val1, val2,  (res) => cb(res))
    },

    updateOne: (col1, val1, col2, val2, id, cb) => {
        orm.updateOne("burgers", col1, val1, col2, val2, id, (res) => cb(res))
    }
}

module.exports = burger;