import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const noteData: Prisma.NoteCreateInput[] = [
  {
    title: 'sample title 1',
    body: 'sample body 1',
  },
  {
    title: 'sample title 2',
    body: 'sample body 2',
  },
  {
    title: 'sample title 3',
    body: 'sample body 3',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const n of noteData) {
    const note = await prisma.note.create({
      data: n,
    })
    console.log(`Created note with id: ${note.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
