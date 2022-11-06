const  megadb = require("megadb")
const infodb = new megadb.crearDB("info", "data")

module.exports = async function getInfo() {
    const data = await infodb.obtener("PancyBotInfo")
    return data
}