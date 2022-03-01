import { FastifyPluginAsync } from 'fastify'
import { Notes } from '../../schemas'

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
        200: Notes,
      },
    },
    handler: main,
  })
}

export default route
