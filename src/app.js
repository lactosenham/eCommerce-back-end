const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()
const compression = require('compression')

//init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// app.use(morgan("combined"))
// app.use(morgan("common"))
// app.use(morgan("short"))
// app.use(morgan("tiny"))


//init db


//init router
app.get('/', (req, res, next) =>{
    const strCompress = 'Hello Lactose'

    return res.status(200).json({
        message: 'Welcom Lactose Nham',
        metadata: strCompress.repeat(1000)
    })
})

//handling error

module.exports = app