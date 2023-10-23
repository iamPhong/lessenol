'use strict'

const mongoose = require('mongoose')
const { db: { host, name, port } } = require('../configs/config.mongodb')
const { countConnect } = require('../helpers/check.connect')

const connectString = `mongodb://${host}:${port}/${name}`

class Database {
  constructor () {
    this.connect()
  }

  connect (type = 'mongodb') {
    mongoose.set('debug', true)
    mongoose.set('debug', { color: true })
    mongoose.connect(connectString, { maxPoolSize: 50 }).then(_ => {
      console.log('[Mongodb] Connected Mongodb Success')
      countConnect()
    }).catch(_error => console.log('[Mongodb] Error connect!'))
  }

  static getInstance () {
    if (!Database.instance) {
      Database.instance = new Database()
    }

    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
