import { FastifyPluginAsync } from 'fastify'
import S from 'fluent-json-schema'

const route: FastifyPluginAsync = async (fastify): Promise<void> => {
  const { prisma } = fastify

  const main = async () => {
    const notes = await prisma.note.findMany()
    return notes
  }

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      tags: ['Note'],
      description: '',
      response: {
        200: S.array().items(
          S.object().prop('id', S.number()).prop('title', S.string()).prop('body', S.string()),
        ),
      },
    },
    handler: main,
  })
}

export default route
