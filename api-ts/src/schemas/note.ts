import { Static, Type } from '@sinclair/typebox'

export const Note = Type.Strict(
  Type.Object({
    id: Type.Number(),
    title: Type.Optional(Type.String()),
    body: Type.Optional(Type.String()),
  }),
)
export type NoteType = Static<typeof Note>

export const Notes = Type.Strict(Type.Array(Note))
export type NotesType = Static<typeof Notes>
