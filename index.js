const express = require("express")
const weatherRoute = require("./Routes/WeatherRoutes")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
require("dotenv").config()

const limit = rateLimit({windowMs:5*60*1000, max:5})
const PORT = process.env.PORT_NUMBER || 3000
const app = express()

app.use(cors())
app.use(limit)
app.set("trust proxy")

app.get("/", (req, res) => {
  res.send("Code: 200 =>  Proxy Server is Running")
})

app.use("/weather", weatherRoute)

app.listen(PORT, () => {
  console.log("Proxy is Listening at 5000")
})
