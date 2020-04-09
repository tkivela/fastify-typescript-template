import { FastifyInstance, FastifyError } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { getDefault, getSum, getSumOpts } from './handlers'

export default (
  fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
  opts,
  next: (err?: FastifyError) => void,
): void => {
  fastify.get('/', getDefault)
  fastify.get('/sum', getSumOpts, getSum)
  next()
}
