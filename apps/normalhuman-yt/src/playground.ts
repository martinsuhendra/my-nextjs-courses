import { db } from './server/db'

await db.user.create({
  data: {
    emailAddress: 'martinsu.docode@gmail.com',
    firstName: 'Martin',
    lastName: 'Suhendra',
  },
})

console.log('done!!')
