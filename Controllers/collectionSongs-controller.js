import  express  from "express";
import generalSettings from "../config.js";
import collectionSongsBl from "../Bl/collectionSongs-bl.js";

const collectionSongsRouter = express.Router()

collectionSongsRouter.get(`${generalSettings.baseUrl}/collectionSongs/songsByCollection/:collectionId`, async (req, res) => {
    let requestCollectionId = +req.params.collectionId
    let result = await collectionSongsBl.getSongsByCollectionId(requestCollectionId);
    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

collectionSongsRouter.get(`${generalSettings.baseUrl}/collectionSongs/collectionsBySong/:songId`, async (req, res) => {
    let requestSongId = +req.params.songId
    let result = await collectionSongsBl.getSongsByCollectionId(requestSongId);
    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export default collectionSongsRouter