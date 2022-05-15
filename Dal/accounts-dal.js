import connection from "../db.js";

let result = {
    success: false,
    data: null
}

const getAllInactiveAccounts = async () => {

    try {
        let res = await connection.promise().query(
            'SELECT * FROM accounts WHERE isactive = 0'
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
    getAllInactiveAccounts
}