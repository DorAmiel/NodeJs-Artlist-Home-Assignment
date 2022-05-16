import songsDal from "../Dal/songs-dal.js";

const getAllSongsByAccountId = async (accountId) => {
    return await songsDal.getAllSongsByAccountId(accountId)
}

const getAllSongsWithCollectionTitle = async ()=>{
    return await songsDal.getAllSongsWithCollectionTitle()
}

export default {
    getAllSongsByAccountId,
    getAllSongsWithCollectionTitle
}