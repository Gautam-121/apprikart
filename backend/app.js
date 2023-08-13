const express = require("express")
const app = express()
const cors = require("cors")
const fileUpload = require("express-fileupload")

const errorMiddleware = require("./middleware/errorMiddleware.js")

app.use(express.json())
app.use(cors())
app.use(fileUpload({
    useTempFiles : true
}))

//import routing
const courseRouter = require("./routes/courseRouter.js")

app.use("/api/v1" , courseRouter)

//use errorMiddleware globally
app.use(errorMiddleware)


module.exports = app