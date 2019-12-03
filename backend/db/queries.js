const database = require('./connection')

module.exports = {
    getAll(){
        return database('users')
    },

    getAllMountain_Ids(){
        return database('mountains')
    }
}
