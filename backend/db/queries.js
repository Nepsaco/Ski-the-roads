const database = require('./connection')

module.exports = {
    getAll(){
        return database('users')
    }
}
