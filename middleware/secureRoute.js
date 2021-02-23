import jwt from 'jsonwebtoken'

import User from '../models/users.js'
import { secret } from '../config/environment.js'

export default async function secureRoute(req, res, next) {
  try {
    
    const authToken = req.headers.authorization
    if (!authToken || !authToken.startsWith('Bearer')) {
      return res.status(401).send({ message: 'Unauthorized1' })
    }
    const token = authToken.replace('Bearer ', '')

    console.log('🤖' + ' ' + authToken)
    console.log('🤖' + ' ' + token)

  
    jwt.verify(token, secret, async (err, data) => {

      console.log('secureRoute token', token)
      console.log('secureRoute secret', secret)
      console.log('secureRoute err', err)

      if (err) {
        return res.status(401).send({ message: 'Unauthorized2' })
      }

      const user = await User.findById(data.userId)

      if (!user) {
        return res.status(401).send({ message: 'Unauthorized3' })
      }

      req.currentUser = user

      next()
    })
    
  } catch (err) {
    res.status(401).send({ message: 'Unauthorized4' })
  }
}