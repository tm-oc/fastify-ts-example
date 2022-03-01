import type { PrismaClient } from '@prisma/client'
import type { ConfigType } from '../schemas'

declare module 'fastify' {
  export interface FastifyInstance {
    config: ConfigType
    prisma: PrismaClient
  }
}
