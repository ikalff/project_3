import express from 'express'

import secureRoute from '../middleware/secureRoute.js'
import properties from '../controllers/properties.js'
import users from '../controllers/users.js'
import bookings from '../controllers/bookings.js'
import comments from '../controllers/comments.js'

const router = express.Router()


// Users

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/users/:usersId')
  .get(users.getSingleUser)
  .put(secureRoute, users.updateUser)


// Properties

router.route('/properties')
  .get(properties.getProperties)
  .post(secureRoute, properties.makeProperty)

router.route('/properties/:propertyId')
  .get(properties.getSingleProperty)
  .put(secureRoute, properties.updateProperty)
  .delete(secureRoute, properties.removeProperty)


// Bookings

router.route('/bookings/all')
  .get(bookings.getBookings)

router.route('/bookings/:propertyId')
  .post(secureRoute, bookings.makeBooking)

router.route('/bookings/:propertyId/:bookingId')
  .put(secureRoute, bookings.updateBooking)
  .delete(secureRoute, bookings.removeBooking)


// Comments

router.route('/properties/:propertyId/comment')
  .post(secureRoute, comments.makeComment)

router.route('/properties/:propertyId/comment/:commentId')
  .put(secureRoute, comments.updateComment)
  .delete(secureRoute, comments.removeComment)

export default router