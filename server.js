const { checkOverload } = require('./src/helpers/check.connect')
const app = require('./src/app')

const PORT = process.env.PORT || 3055

const server = app.listen(PORT, () => {
  console.log(`WSV Lessenol start with ${PORT}`)
})

const overloadEvent = checkOverload()

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Exist server Lessenol')
    clearInterval(overloadEvent)
  })
})
