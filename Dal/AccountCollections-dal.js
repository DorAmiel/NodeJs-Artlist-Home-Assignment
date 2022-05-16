import connection from "../db.js";


let result = {
    success: false,
    data: null
}

const getCollectionByAccountId = async (accountId) => {


    try {
        let res = await connection.promise().query(
            `SELECT title, numberofsongs, AccountCollections.accountId, AccountCollections.collectionId FROM collections
            JOIN AccountCollections ON collections.collectionId = AccountCollections.collectionId
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



export default {
    getCollectionByAccountId
}