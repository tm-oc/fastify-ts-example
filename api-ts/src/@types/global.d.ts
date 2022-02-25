import type { PrismaClient } from '@prisma/client'

type AppConfig = {
  NODE_ENV: string
}

declare module 'fastify' {
  export interface FastifyInstance {
    config: AppConfig
    prisma: PrismaClient
  }
}
