//! DO WE NEED A BOOKING MODEL??
import Properties from '../models/properties.js'
// ! NEED TO AD ADMINS

async function getSingleBooking(req, res, next) {
  const id = req.params.id

  try {
    const booking = await booking.findById(id).populate('user')
    res.send(booking)
  } catch (err) {
    next(err)
  }
}

async function makeBooking(req, res, next) {

  const bookingData = req.body
  const propertyId = req.params.propertyId
  

  const numberOfGuests = req.body.numberOfGuests 

  bookingData.user = req.currentUser

  try {
    const property = await Properties.findById(propertyId)

    if (!property) {
      return res.status(404).send({ message: 'Not found' })
    }

    if (numberOfGuests > property.maxNumberOfGuests) {
      
      return res.status(400).send({ message: 'Too many guests for this booking' })
    }


    const propertyname = property.name

    bookingData.propertyName = propertyname

    bookingData.propertyId = propertyId

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

    if (!booking.user._id.equals(currentUser._id)) {
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

    if (!booking.user._id.equals(currentUser._id)) {
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
  getSingleBooking,
  makeBooking,
  updateBooking,
  removeBooking
}
