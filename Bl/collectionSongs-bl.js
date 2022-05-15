import collectionSongsDal from "../Dal/collectionSongs-dal.js"

const getSongsByCollectionId = async (collectionId) => {
    return await collectionSongsDal.getSongsByCollectionId(collectionId)
}

const getCollectionsBySongId = async (songId) => {
    return await collectionSongsDal.getCollectionsBySongId(songId)
}

export default {
    getSongsByCollectionId,
    getCollectionsBySongId
}