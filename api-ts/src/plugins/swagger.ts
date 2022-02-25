import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import Swagger from 'fastify-swagger'

const plugin: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.register(Swagger, {
    routePrefix: '/swagger',
    swagger: {
      info: {
        title: 'API example',
        description: 'API example',
        version: '1.0.0',
      },
      externalDocs: {
        url: 'https://swagger.io/',
        description: 'Find more info here',
      },
      host: 'localhost:3010',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    exposeRoute: fastify.config.NODE_ENV !== 'production',
  })
}

export default fp(plugin, { name: 'swagger' })
