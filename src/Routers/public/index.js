const { Router } = require('express')
const getInfo = require('../../functions/getInfoBot.js')
const path = require('path');

var PageRouter = Router()

PageRouter.get('/', async (_, res) => {
    const botinfo = await getInfo()
    res.status(200).render("index.ejs", {botinfo})
    console.log("[WEB] Se renderizo index.ejs")
})

PageRouter.get("/assets/:subdir/:filename", (req, res) => {
    res.sendFile(path.join(__dirname, `../../assets/${req.params.subdir}/${req.params.filename}`))
})

PageRouter.get("/assets/bootstrap/:subdir/:filename", (req, res) => {
    res.sendFile(path.join(__dirname, `../../assets/bootstrap/${req.params.subdir}/${req.params.filename}`))
})

module.exports = PageRouter