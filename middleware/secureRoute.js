import jwt from 'jsonwebtoken'

import User from '../models/users.js'
import { secret } from '../config/environment.js'

export default async function secureRoute(req, res, next) {
  try {
    console.log(req.params)

    const authToken = req.headers.authorization
    if (!authToken || !authToken.startsWith('Bearer')) {
      console.log('Unauthorized1')
      return res.status(401).send({ message: 'Unauthorized1' })
    }
    const token = authToken.replace('Bearer ', '')

    console.log('🤖' + ' ' + authToken)
    console.log('🤖' + ' ' + token)

  
    jwt.verify(token, secret, async (err, data) => {

      if (err) {
        console.log('Unauthorized2')
        return res.status(401).send({ message: 'Unauthorized2' })
      }

      const user = await User.findById(data.userId)
      console.log('SecureRoute user', user)

      if (!user) {
        console.log('Unauthorized3')
        return res.status(401).send({ message: 'Unauthorized3' })
      }

      req.currentUser = user
      next()
    })

  } catch (err) {
    console.log('Unauthorized4')
    res.status(401).send({ message: 'Unauthorized4' })
  }
}