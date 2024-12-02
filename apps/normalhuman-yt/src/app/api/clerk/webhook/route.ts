import { db } from '@/server/db'
export const POST = async (req: Request) => {
  const { data } = await req.json()

  if (data) {
    const user = {
      id: data.id,
      emailAddress: data.email_addresses[0].email_address,
      firstName: data.first_name,
      lastName: data.last_name,
      imageUrl: data.image_url,
    }

    await db.user.create({ data: user })
  }
  console.log('new user created')
  return new Response('webhook received', { status: 200 })
}
