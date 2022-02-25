import { PrismaClient } from '@prisma/client'
import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  const prisma = new PrismaClient()

  await prisma.$connect()

  fastify.decorate('prisma', prisma)

  fastify.addHook('onClose', async (instance, done) => {
    await instance.prisma.$disconnect()
    done()
  })
}

export default fp(plugin, { name: 'db' })
