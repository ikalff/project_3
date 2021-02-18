import User from '../models/users.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

async function register(req, res, next) {
  if (req.body.isAdmin) {
    delete req.body.isAdmin
  }
  const body = req.body
  try {
    const user = await User.create(body)
    res.status(201).send(user)
  } catch (err) {
    next(err)
  }
}

async function login(req, res, next) {
  const password = req.body.password
  try {

    const user = await User.findOne({ email: req.body.email })

    console.log('logged in user')
    console.log(user)

    if (!user || !user.validatePassword(password)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    console.log('user has validated')
    console.log(secret)
  
    const token = jwt.sign(
      { userId: user._id }, 
      secret, 
      { expiresIn: '12h' } 
    )
    console.log(token)

    res.status(202).send({ token, message: 'Login successful!' })

  } catch (err) {
    next(err)
  }
}
async function getUsers(req, res, next) {
  try {
    const userList = await  User.find()
    res.status(200).send(userList)
  } catch (err) {
    next(err)
  }
}
async function getSingleUser(req, res, next) {
  const id = req.params.usersId
  try {
    const user = await User.findById(id)
    res.send(user)
  } catch (err) {
    next(err)
  }
}
async function updateUser(req, res, next) {
  const id = req.params.usersId
  const currentUser = req.currentUser
  const body = req.body

  try {
    const userToUpdate = await User.findById(id)
    if (!userToUpdate) {
      return res.send({ message: 'Oops, we didn\'t find any users to update. Please try again' })
    }
    if (!userToUpdate.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    
    userToUpdate.set(body)
    userToUpdate.save()

    res.send(userToUpdate)

  } catch (err) {
    next()
  }
}
export default {
  register,
  login,
  getSingleUser,
  updateUser,
  getUsers
}