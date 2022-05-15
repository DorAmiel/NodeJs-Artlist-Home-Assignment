import AccountCollectionsDal from "../Dal/AccountCollections-dal.js"

const getCollectionByAccountId = async (accountId) => {
    return await AccountCollectionsDal.getCollectionByAccountId(accountId)
}

export default {
    getCollectionByAccountId
}