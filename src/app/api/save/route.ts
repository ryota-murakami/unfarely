/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// TODO
export async function POST(req: Request) {
  const { simpleEditorText, completed } = await req.json()
  console.table({ simpleEditorText, completed })
  // Start a transaction to ensure data consistency
  // const result = await prisma.$transaction(async (prisma) => {
  //   // Create an entry in the 'Editor' table
  //   const editor = await prisma.editor.create({
  //     data: {
  //       text: simpleEditorText,
  //       // Assuming 'completed' is a relation to another table
  //       completed: {
  //         create: completed.map(item => ({ title: item })),
  //       },
  //     },
  //   })
  //   return editor
  // })

  // console.log(result)

  return new Response(JSON.stringify({ message: 'Saved ✅' }), { status: 200 })
}
