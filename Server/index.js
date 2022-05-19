const express = require('express')
const app = express()
const  cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const {readdirSync} = require('fs')

require('dotenv').config()



//db collection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('DB connected')).catch(err => console.log("DB connection",err))

//middlewares
app.use(bodyParser.json())
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// route middleware
readdirSync("./route").map((r) => app.use("/api", require(`./route/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


