import * as fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import router from './router'

const serverOptions: fastify.ServerOptions = {
  // Logger only for production
  logger: !!(process.env.NODE_ENV !== 'development'),
}

const fastifyInstance: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify(
  serverOptions,
)

const server = {
  start: async (port: number): Promise<void> => {
    fastifyInstance.register(router) // Middleware: Router

    fastifyInstance.listen(port, '0.0.0.0', (err) => {
      if (err) {
        return Promise.reject(err)
      }
      return Promise.resolve()
    })
  },
}

export default server
