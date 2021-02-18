import Properties from '../models/properties.js'

async function getProperties(_req, res, next) {
  try {
    const propertyList = await Properties.find().populate('host').populate('comments.user').populate('bookings.user')
    res.send(propertyList)
  } catch (err) {
    next(err)
  }
}

async function makeProperty(req, res, next) {
  const body = req.body
  body.user = req.currentUser
  try {
    const newProperty = await Properties.create(body)
    res.status(201).send(newProperty)
  } catch (err) {
    next(err)
  }
}

async function getSingleProperty(req, res, next) {
  const id = req.params.propertyId
  console.log('Req.params:', req.params)
  try {
    const property = await Properties.findById(id).populate('host').populate('comments.user').populate('bookings.user')
    res.send(property)
  } catch (err) {
    next(err)
  }
}

async function removeProperty(req, res, next) {
  const id = req.params.propertyId
  const currentUser = req.currentUser

  try {

    const propertyToRemove = await Properties.findById(id).populate('host').populate('comments.user').populate('bookings.user')

    if (!currentUser.isAdmin && !currentUser._id.equals(propertyToRemove.host._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    await propertyToRemove.deleteOne()

    res.send(propertyToRemove)
  } catch (err) {
    next(err)
  }
}

async function updateProperty(req, res, next) {
  const id = req.params.propertyId
  const currentUser = req.currentUser
  const body = req.body

  try {
    const propertyToUpdate = await Properties.findById(id).populate('host')
    if (!propertyToUpdate) {
      return res.send({ message: 'Oops, we didn\'t find any properties to update. Please try again' })
    }
    if (!propertyToUpdate.host._id.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    
    propertyToUpdate.set(body)
    propertyToUpdate.save()

    res.send(propertyToUpdate)

  } catch (err) {
    next()
  }
}

export default {
  getProperties,
  makeProperty,
  getSingleProperty,
  removeProperty,
  updateProperty
}