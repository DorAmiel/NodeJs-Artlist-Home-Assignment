import collectionSongsDal from "../Dal/collectionSongs-dal.js"

const getSongsByCollectionId = async (collectionId) => {
    return await collectionSongsDal.getSongsByCollectionId(collectionId)
}

export default {
    getSongsByCollectionId
}