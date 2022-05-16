import express from "express";
import generalSettings from "../config.js";
import songsBl from "../Bl/songs-bl.js";

const songsRouter = express.Router()

songsRouter.get(`${generalSettings.baseUrl}/songs/:userId`, async (req, res) => {
    let requestUserId = +req.params.userId
    let result = await songsBl.getAllSongsByAccountId(requestUserId);
    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

songsRouter.get(`${generalSettings.baseUrl}/songsWithColletionTitle`, async (req, res) => {
    let result = await songsBl.getAllSongsWithCollectionTitle()
    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export default songsRouter