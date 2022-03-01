import { join } from 'path'
import { FastifyPluginAsync } from 'fastify'
import AutoLoad, { AutoloadPluginOptions } from 'fastify-autoload'
import Env from 'fastify-env'
import Sensible from 'fastify-sensible'
import { Config } from './schemas'

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  fastify.register(Env, {
    schema: Config,
  })

  fastify.register(Sensible)

  fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: opts,
  })

  fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts,
  })
}

export default app
export { app }
