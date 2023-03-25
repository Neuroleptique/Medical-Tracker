// import model/schema to initiate actions
const Appt = require("../models/Appt")

const createAppt = async (req, res) => {
  const {
    title,
    startDate,
    endDate,
    locationField,
    allDay,
    prepField,
    covidField
  } = req.body.data.appts
  console.log("REQ BODY", req.body)
  let covidData = covidField === 2 ? "yes" : "no"

  const appt = await Appt.create({
    title,
    startDate,
    endDate,
    location: locationField,
    allDay,
    prepField,
    covidData
  })
  console.log("appt :", appt)
  res.status(200).json({ appt })
}

module.exports = {
  createAppt
}
