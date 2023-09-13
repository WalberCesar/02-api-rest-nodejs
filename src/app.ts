import fastify from 'fastify'
import { knex } from './database'
import cookie from '@fastify/cookie'

import { transactionRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})
