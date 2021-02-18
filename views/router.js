import express from 'express'

import secureRoute from '../middleware/secureRoute.js'
import properties from '../controllers/properties.js'
import users from '../controllers/users.js'
import bookings from '../controllers/bookings.js'
import comments from '../controllers/comments.js'

const router = express.Router()

router.route('/properties')
  .get(properties.getProperties)
  .post(secureRoute, properties.createProperty)

router.route('/properties/:propertyId')
  .get(properties.getSingleProperty)
  .put(secureRoute, properties.updateProperty)
  .delete(secureRoute, properties.removeProperty)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

router.route('/usersss/:userssId')
  .get(users.getSingleuserss)
  .put(secureRoute, users.updateuserss)

router.route('/booking/:propertyId')
  .post(secureRoute, bookings.createBooking)

router.route('/booking/:propertId/:bookingId')
  .put(secureRoute, bookings.updateBooking)
  .delete(secureRoute, bookings.removeBooking)

router.route('/properties/:propertyId/comment')
  .post(secureRoute, comments.createComment)

router.route('/properties/:propertyId/comment/:commentId')
  .put(secureRoute, comments.updateComment)
  .delete(secureRoute, comments.removeComment)

export default router