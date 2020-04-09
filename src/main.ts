import server from './server'

const FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3042

server.start(FASTIFY_PORT).then(
  () => {
    console.log(`Server started, listening on port ${FASTIFY_PORT}`)
  },
  (err) => {
    console.log(`Error starting server: ${err}`)
  },
)
