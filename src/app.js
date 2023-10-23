require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()

// init middlewares
app.use(morgan('combined'))
app.use(helmet())
app.use(compression())

// innit db
require('./dbs/init.mongodb')
// init routes

// handle errors

module.exports = app
