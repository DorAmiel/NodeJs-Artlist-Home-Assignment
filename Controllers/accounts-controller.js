import  express  from "express";
import generalSettings from "../config.js";
import accountsBl from "../Bl/accounts-bl.js";

const accountsRouter = express.Router()

accountsRouter.get(`${generalSettings.baseUrl}/inactiveAccounts`, async (req, res) => {
    let result = await accountsBl.getAllInactiveAccounts();

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export default accountsRouter
