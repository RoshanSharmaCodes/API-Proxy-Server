const url = require("url")
const express = require("express")
const weatherRoute = express.Router()
const needle = require("needle")
require("dotenv").config()

//constants
const API_BASE_URL = process.env.API_BASE_URL
const API_BASE_KEY = process.env.API_BASE_KEY
const API_BASE_NAME = process.env.API_BASE_NAME

weatherRoute.get("/", async (req, res, next) => {
  try {
    const param = new URLSearchParams({ [API_BASE_NAME]: API_BASE_KEY, ...url.parse(req.url, true).query })
    const weatherRes = await needle("get", `${API_BASE_URL}?${param}`)
    console.log(weatherRes)
    const weather = await weatherRes.json()
    res.send(weather)
  } catch(err) {
      console.log(err)
  }
})

//to handle loose paths
weatherRoute.get("*", (req, res) => {
  res.send("<h1>Sorry! Not able to locate the path</h1>")
})

module.exports = weatherRoute
