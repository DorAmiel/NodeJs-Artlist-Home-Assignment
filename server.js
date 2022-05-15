import express from 'express'
import generalSettings from './config.js'
import AccountCollectionsRouter from './Controllers/accountCollections-controller.js'
import collectionsRouter from './Controllers/collections-controller.js'
import accountsRouter from './Controllers/accounts-controller.js'
import collectionSongsRouter from './Controllers/collectionSongs-controller.js'

const app = express()
app.use(express.json())

app.use('/', AccountCollectionsRouter)
app.use('/', collectionsRouter)
app.use('/', accountsRouter)
app.use('/', collectionSongsRouter)

console.log(`Server is runnig on port ${generalSettings.port} `)
app.listen(generalSettings.port)