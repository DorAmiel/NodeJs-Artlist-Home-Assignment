import express from 'express'
import generalSettings from './config.js'
import AccountCollectionsRouter from './Controllers/accountCollections-controller.js'
import collectionsRouter from './Controllers/collections-controller.js'

const app = express()
app.use(express.json())

app.use('/', AccountCollectionsRouter)
app.use('/', collectionsRouter)

console.log(`Server is runnig on port ${generalSettings.port} `)
app.listen(generalSettings.port)