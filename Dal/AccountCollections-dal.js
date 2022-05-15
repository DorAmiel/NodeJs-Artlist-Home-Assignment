import connection from "../db.js";


let result = {
    success: false,
    data: null
}

const getCollectionByAccountId = async (accountId) => {
    

    try {
        let res = await connection.promise().query(
            `SELECT * FROM AccountCollections WHERE accountId = ${accountId}`
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