require('dotenv').config()
const express = require('express')
const notFound = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRouter = require('./routes/auth-route')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

//service
app.use("/auth", authRouter)


//notFound
app.use (notFound)


//error
app.use( errorMiddleware )



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
