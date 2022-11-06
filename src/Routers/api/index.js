const { Router } = require("express")
const megadb = require("megadb")
const infodb = new megadb.crearDB("info", "data")

var ApiRouter = Router()

ApiRouter.post("/commands", (req, res) => {
    if(req.body.apikey !== process.env.apiKey) {
        return res.sendStatus(403)
    }
    try {
        infodb.establecer("PancyBotCmds", req.body.commands)
        console.log(req.body.commands)
    } catch (error) {
        res.send(error).status(501)
    } finally {
        res.sendStatus(204)
    }
})

ApiRouter.get("/commands", (req, res) => {

})

ApiRouter.post("/info", (req, res) => {
    if(req.body.apikey !== process.env.apiKey) {
        return res.sendStatus(403)
    }
    try {
        infodb.establecer("PancyBotInfo", req.body.info)
        console.log(req.body)
    } catch (err) {
        res.status(500).send(err)
    } finally {
        res.sendStatus(204)
    }


})

module.exports = ApiRouter