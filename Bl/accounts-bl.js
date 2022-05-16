import accountsDal from "../Dal/accounts-dal.js"

const getAllActiveAccounts = async () => {
    return await accountsDal.getAllActiveAccounts()
}

export default {
    getAllActiveAccounts
}