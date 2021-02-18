//! DO WE NEED A BOOKING MODEL??

async function getBookings(_req, res, next) {
  try {
    const bookingList = await bookings.find().populate('user')
    res.send(bookingList)
  } catch (err) {
    next(err)
  }
}

async function makeBooking(req, res, next) {
  const body = req.body
  body.user = req.currentUser
  try {
    const newbooking = await bookings.create(body)
    res.status(201).send(newbooking)
  } catch (err) {
    next(err)
  }
}

async function getSingleBooking(req, res, next) {
  const id = req.params.id

  try {
    const booking = await bookings.findById(id).populate('user')
    res.send(booking)
  } catch (err) {
    next(err)
  }
}

async function removeBooking(req, res, next) {
  const id = req.params.id
  const currentUser = req.currentUser

  try {

    const bookingToRemove = await bookings.findById(id).populate('user')

    if (!currentUser.isAdmin && !currentUser._id.equals(bookingToRemove.user)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    await bookingToRemove.deleteOne()

    res.send(bookingToRemove)
  } catch (err) {
    next(err)
  }
}

async function updateBooking(req, res, next) {
  const id = req.params.id
  const currentUser = req.currentUser
  const body = req.body

  try {
    const bookingToUpdate = await bookings.findById(id)
    if (!bookingToUpdate) {
      return res.send({ message: 'Oops, we didn\'t find any bookings to update. Please try again' })
    }
    if (!bookingToUpdate.user.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }
    
    bookingToUpdate.set(body)
    bookingToUpdate.save()

    res.send(bookingToUpdate)

  } catch (err) {
    next()
  }
}

export default {
  getBookings,
  makeBooking,
  getSingleBooking,
  removeBooking,
  updateBooking
}