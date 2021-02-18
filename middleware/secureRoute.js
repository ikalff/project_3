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
      
      if (err) {
        return res.status(401).send({ message: 'Unauthorized2' })
      }

      const user = await User.findById(data.userId)
     
      console.log('Hello I am your User.findById', User.findById(data.userId))
      console.log('Hello I am your user variable', user)
      console.log('Hello I am your userId', data.userId)
      console.log('Hello I am your req params', req.params)

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