//! DO WE NEED A BOOKING MODEL??
import Properties from '../models/properties.js'
// ! NEED TO AD ADMINS
async function getBookings(_req, res, next) {
  try {
    const bookingList = await Properties.find().populate('user').populate('bookings.user')
    res.send(bookingList)
  } catch (err) {
    next(err)
  }
}

async function makeBooking(req, res, next) {

  const bookingData = req.body
  const propertyId = req.params.propertyId
  bookingData.user = req.currentUser

  try {
    const property = await Properties.findById(propertyId).populate('bookings.user').populate('user')

    if (!property) {
      return res.status(404).send({ message: 'Not found' })
    }


    property.bookings.push(bookingData)

    const savedProperty = await property.save()

    res.send(savedProperty)

  } catch (err) {
    next(err)
  }
}

async function updateBooking(req, res, next) {
  const bookingData = req.body
  const currentUser = req.currentUser
  const { bookingId, propertyId } = req.params

  try {
    const property = await Properties.findById(propertyId).populate('user').populate('bookings.user')

    if (!property) {
      return res.status(404).send({ message: 'Not found' })
    }


    const booking = property.bookings.id(bookingId)

    if (!booking.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    booking.set(bookingData)

    const savedProperty = await property.save()

    res.send(savedProperty)

  } catch (err) {
    next(err)
  }
}

async function removeBooking(req, res, next) {
  const currentUser = req.currentUser
  const { bookingId, propertyId } = req.params

  try {
    const property = await Properties.findById(propertyId).populate('user').populate('bookings.user')

    if (!property) {
      return res.status(404).send({ message: 'Not found' })
    }

    const booking = property.bookings.id(bookingId)

    if (!booking.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    booking.remove()

    const savedProperty = await property.save()
    res.send(savedProperty)

  } catch (err) {
    next(err)
  }
}

export default {
  getBookings,
  makeBooking,
  updateBooking,
  removeBooking
}
