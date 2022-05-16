import  express  from "express";
import generalSettings from "../config.js";
import accountsBl from "../Bl/accounts-bl.js";

const accountsRouter = express.Router()

accountsRouter.get(`${generalSettings.baseUrl}/activeAccounts`, async (req, res) => {
    let result = await accountsBl.getAllActiveAccounts();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})



export default accountsRouter
