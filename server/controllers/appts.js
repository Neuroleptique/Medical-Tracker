// import model/schema to initiate actions
const Appt = require("../models/Appt")

const createAppt = async (req, res) => {
  const {
    title,
    startDate,
    endDate,
    locationField: location
  } = req.body.data.appts

  const appt = await Appt.create({
    title,
    startDate,
    endDate,
    locationField: location
  })

  res.send("success")
}

module.exports = {
  createAppt
}
