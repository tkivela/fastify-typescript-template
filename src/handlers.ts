import * as fastify from 'fastify'
import * as http from 'http'
import { sum } from './sum'

export const getDefault = async (
  request: fastify.FastifyRequest<http.IncomingMessage>,
  reply: fastify.FastifyReply<http.ServerResponse>,
): Promise<void> => {
  reply.header('Content-Type', 'text/html; charset=utf-8')
    .send(`<h1>Welcome to Fastify + Typescript Template 🔥</h1>
    <p>Example http GET endpoint is at /sum , requires query parameters a and b.</p> Example: http://localhost:3042/sum?a=1&b=2`)
}

export const getSum = async (
  request: fastify.FastifyRequest<http.IncomingMessage>,
  reply: fastify.FastifyReply<http.ServerResponse>,
): Promise<void> => {
  const a = request.query.a
  const b = request.query.b
  const sumResult = sum(a, b)
  const sign = request.query.b >= 0 ? '+' : ''
  const result = `${a}${sign}${b} = ${sumResult}`
  const time = `Current time is: ${new Date()}`
  const obj = {
    result,
    time,
  }

  reply.type('application/json').send(obj)
}

export const getSumOpts: fastify.RouteShorthandOptions = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        a: {
          type: 'number',
        },
        b: {
          type: 'number',
        },
      },
      required: ['a', 'b'],
    },
  },
}
