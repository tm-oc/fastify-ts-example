import { Static, Type } from '@sinclair/typebox'

export const Status = Type.Strict(
  Type.Object({
    status: Type.String(),
  }),
)

export type StatusType = Static<typeof Status>
