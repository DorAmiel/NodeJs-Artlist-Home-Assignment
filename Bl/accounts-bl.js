import accountsDal from "../Dal/accounts-dal.js"

const getAllInactiveAccounts = async () => {
    return await accountsDal.getAllInactiveAccounts()
}

export default {
    getAllInactiveAccounts
}