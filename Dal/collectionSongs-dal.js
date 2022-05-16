import connection from "../db.js";


let result = {
    success: false,
    data: null
}

const getSongsByCollectionId = async (collectionId) => {


    try {
        let res = await connection.promise().query(
            `SELECT songName, rating, duration, collectionSongs.songId, collectionSongs.collectionId FROM songs
            JOIN collectionSongs ON collectionSongs.songId = songs.songId
            WHERE collectionSongs.collectionId = ${collectionId};`
        )

        result.success = true
        result.data = res[0]
        return result

    } catch (err) {

        result.success = false
        result.data = err
        return result
    }
}


const getCollectionsBySongId = async (songId) => {


    try {
        let res = await connection.promise().query(
            `SELECT title, numberofsongs, collectionSongs.songId, collectionSongs.collectionId FROM collections
            JOIN collectionSongs ON collectionSongs.collectionId = collections.collectionID
            WHERE collectionSongs.songId = ${songId};`
        )

        result.success = true
        result.data = res[0]
        return result

    } catch (err) {

        result.success = false
        result.data = err
        return result
    }
}

export default {
    getSongsByCollectionId,
    getCollectionsBySongId
}