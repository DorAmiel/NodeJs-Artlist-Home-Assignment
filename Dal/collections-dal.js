import connection from "../db.js";

let result = {
    success: false,
    data: null
}

const getAllEmptyCollections = async () => {

    try {
        let res = await connection.promise().query(
            'SELECT * FROM collections WHERE numberofsongs = 0'
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
    getAllEmptyCollections
}