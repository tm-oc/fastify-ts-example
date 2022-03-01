import { Static, Type } from '@sinclair/typebox'

export const Config = Type.Strict(
  Type.Object({
    NODE_ENV: Type.String(),
  }),
)

export type ConfigType = Static<typeof Config>
