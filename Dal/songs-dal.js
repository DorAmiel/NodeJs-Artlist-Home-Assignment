import connection from "../db.js";

let result = {
    success: false,
    data: null
}

const getAllSongsByAccountId = async (accountId) => {

    try {
        let res = await connection.promise().query(
            `SELECT DISTINCT songName, accountCollections.accountId FROM songs
            JOIN  collectionSongs ON songs.songId = collectionSongs.songId
            JOIN AccountCollections ON collectionSongs.collectionId = AccountCollections.accountId
            WHERE AccountCollections.accountId = ${accountId};`
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

const getAllSongsWithCollectionTitle = async () => {

    try {
        let res = await connection.promise().query(
            `SELECT songName, collections.title FROM songs
            JOIN collectionSongs ON songs.songId = collectionSongs.songId
            JOIN collections`
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
    getAllSongsByAccountId,
    getAllSongsWithCollectionTitle
}