import express from 'express'
import generalSettings from './config.js'
import AccountCollectionsRouter from './Controllers/AccountCollections-controller.js'

const app = express()
app.use(express.json())

app.use('/', AccountCollectionsRouter)

console.log(`Server is runnig on port ${generalSettings.port} `)
app.listen(generalSettings.port)