var app = require("./server/server")
var config = require("./server/config/config")
app.listen(config.port, () => {
    console.log("Listening to port: " +  config.port)
})