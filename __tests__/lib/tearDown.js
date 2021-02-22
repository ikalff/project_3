import Properties from '../../models/properties.js'
import User from '../../models/users.js'

export default async function tearDown(done) {
 
  await User.deleteMany()
  await Properties.deleteMany()
  done()
}