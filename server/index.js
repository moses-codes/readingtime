const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3000

const app = express()
app.use(logger('dev'))
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
    res.status(200).send("pardon my kijijis");
   });

app.listen( PORT, () => {
    console.log(`server is running on ${PORT}`)
})