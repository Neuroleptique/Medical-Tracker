const express = require("express")
const router = express.Router()

const { createAppt } = require("../controllers/appts")

router.route("/create").post(createAppt)
// router.route("/static").get(getAllProductsStatic)

module.exports = router
