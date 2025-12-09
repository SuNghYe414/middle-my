import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export async function GET() {
  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB)

  const messages = await db
    .collection('guestbook')
    .find({})
    .sort({ createdAt: -1 })
    .toArray()

  return NextResponse.json(messages)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const message = body.message

  if (!message || message.trim() === '') {
    return NextResponse.json({ error: 'Message is empty' }, { status: 400 })
  }

  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB)

  await db.collection('guestbook').insertOne({
    name: session.user?.name || 'Anonymous',
    message,
    createdAt: new Date(),
  })

  return NextResponse.json({ ok: true })
}
