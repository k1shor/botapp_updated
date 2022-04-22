const express = require('express')    // to create express api, require - importing 
require('dotenv').config()
const db = require('./Database/connection')
const expressValidator = require('express-validator')
const body_Parser = require('body-parser')
const CategoryRoute = require('./Route/categoryRoute')
const ChannelRoute = require('./Route/channelroute')

const UserRoute = require('./Route/userRoute')
const BotRoute = require('./Route/botRoute')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()
const port = process.env.PORT  ||  8000



// middleware 
app.use(cors())
app.use(body_Parser.json())
app.use('/public/uploads',express.static('public/uploads'))
app.use(morgan('dev'))
app.use(expressValidator())
app.use(cookieParser())


app.use('/api',CategoryRoute)

app.use('/api',UserRoute)
app.use('/api',ChannelRoute)
app.use('/api',BotRoute)


app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})