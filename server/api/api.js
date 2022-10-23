var router = require("express").Router()
var userApi = require("./users/userRoutes")

router.use('/user',userApi )

module.exports = router