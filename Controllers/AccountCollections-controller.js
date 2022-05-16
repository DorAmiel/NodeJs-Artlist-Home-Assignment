import  express  from "express";
import generalSettings from "../config.js";
import AccountCollectionsBl from "../Bl/accountCollections-bl.js";
const AccountCollectionsRouter = express.Router()

AccountCollectionsRouter.get(`${generalSettings.baseUrl}/AccountCollections/:accountId`, async (req, res) => {
    let requestAccountId = +req.params.accountId
    let result = await AccountCollectionsBl.getCollectionByAccountId(requestAccountId);
    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result) 
    }
})

export default AccountCollectionsRouter