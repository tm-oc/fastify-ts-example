import { FastifyPluginAsync } from 'fastify'
import S from 'fluent-json-schema'

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
        200: S.object().prop('status', S.string()),
      },
    },
    handler: main,
  })
}

export default route
