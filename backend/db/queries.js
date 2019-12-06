const database = require('./connection')

module.exports = {
    getAll(){
        return database('users')
            .then(users => {
                const promises = users.map(user => {
                    return database('favorites')
                        .where('favorites.user_id', user.id)
                        .then(favorites => {
                            user.favorites = favorites
                            return user
                        })
                })
                return Promise.all(promises)
            })
    },

    getAllMountain_Ids(){
        return database('mountains')
    },

    createFavorite(favorite){
        return database('favorites')
            .insert(favorite)
            .returning('*')
    }
}
