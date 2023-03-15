const express = require("express")
const weatherRoute = require("./Routes/WeatherRoutes")
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT_NUMBER || 3000
const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.send("Code: 200 =>  Proxy Server is Running")
})

app.use("/weather", weatherRoute)

app.listen(PORT, () => {
  console.log("Proxy is Listening at 5000")
})
