import fastify from 'fastify'
import { knex } from './database'
import cookie from '@fastify/cookie'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running')
  })
