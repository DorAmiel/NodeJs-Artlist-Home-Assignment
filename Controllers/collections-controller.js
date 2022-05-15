import  express  from "express";
import generalSettings from "../config.js";
import collectionsBl from "../Bl/collections-bl.js";

const collectionsRouter = express.Router()

collectionsRouter.get(`${generalSettings.baseUrl}/emptyCollections`, async (req, res) => {
    let result = await collectionsBl.getAllEmptyCollections();
    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export default collectionsRouter