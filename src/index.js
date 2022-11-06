const express = require("express")
const morgan = require('morgan')
const ApiRouter = require("./Routers/api/index")
const PageRouter = require("./Routers/public/index")
const megadb = require('megadb')
const infodb = new megadb.crearDB("info", "data")
const bodyParser = require("body-parser");

const app = express();

app.use(morgan("combined"))
app.set("view engine", "ejs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", ApiRouter)
app.use("/", PageRouter)

app.listen(3000, () => {
    console.log('[WEB] PancyBot Website is listening on')
})

module.exports = {infodb}