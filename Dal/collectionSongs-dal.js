import connection from "../db.js";


let result = {
    success: false,
    data: null
}

const getSongsByCollectionId = async (collectionId) => {
    

    try {
        let res = await connection.promise().query(
            `SELECT * FROM collectionSongs WHERE collectionId = ${collectionId}`
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
            `SELECT * FROM collectionSongs WHERE songId = ${songId}`
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