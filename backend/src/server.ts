import 'dotenv/config'
import { buildApp } from './app.js'
import { env } from './config/env.js'

const app = buildApp()

async function start() {
  try {
    await app.listen({ host: env.host, port: env.port })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

void start()
