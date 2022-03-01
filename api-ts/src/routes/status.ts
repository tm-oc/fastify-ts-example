import { FastifyPluginAsync } from 'fastify'
import { Status } from '../schemas'

const route: FastifyPluginAsync = async (fastify): Promise<void> => {
  const main = async () => {
    return {
      status: 'ok',
    }
  }

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      tags: ['Status'],
      description: '',
      response: {
        200: Status,
      },
    },
    handler: main,
  })
}

export default route
