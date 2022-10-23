var router = require("express").Router()
var userApi = require("./users/userRoutes")

router.use('/user')

module.exports = router