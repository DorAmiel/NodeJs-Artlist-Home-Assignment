import AccountCollectionsDal from "../Dal/accountCollections-dal.js"

const getCollectionByAccountId = async (accountId) => {
    return await AccountCollectionsDal.getCollectionByAccountId(accountId)
}

export default {
    getCollectionByAccountId
}