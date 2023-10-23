'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECOND = 5000
const MAXIMUM_CONNECT_PEER_CORE = 5

const countConnect = () => {
  const numConnection = mongoose.connections.length
  console.log(`[Mongodb] Number of connections::${numConnection}`)
}

const checkOverload = () => {
  return setInterval(() => {
    const numConnection = mongoose.connections.length
    const numCores = os.cpus().length
    const memoryUsage = process.memoryUsage().rss
    const maxConnections = numCores * MAXIMUM_CONNECT_PEER_CORE

    console.log(`[System] Active connections:${numConnection}`)
    console.log(`[System] Memory usage:: ${memoryUsage / 1024 / 1024} MB`)

    if (numConnection > maxConnections) {
      console.log('[Mongodb] Connection overload detected!')
    }
  }, _SECOND)
}

module.exports = {
  countConnect,
  checkOverload
}
