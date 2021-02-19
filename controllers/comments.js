import Properties from '../models/properties.js'
// ! NEED TO AD ADMINS
async function makeComment(req, res, next) {

  const commentData = req.body
  const propertyId = req.params.propertyId
  const currentUser = req.currentUser
  commentData.user = currentUser

  try {
    const property = await Properties.findById(propertyId).populate('comments.user').populate('host')

    if (!property) {
      return res.status(404).send({ message: 'Not found' })
    }

    if (!currentUser._id.equals(property.host._id)) {
      if (property.bookings.length < 1) return res.status(401).send({ message: 'Only the host and users that have booked can make a comment' })
      property.bookings.map(booking => {

        if (!currentUser._id.equals(booking.user._id)) return res.status(401).send({ message: 'Only the host and users that have booked can make a comment' })
      })
    }

    property.comments.push(commentData)

    const savedProperty = await property.save()

    res.send(savedProperty)

  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function updateComment(req, res, next) {
  const commentData = req.body
  const currentUser = req.currentUser
  commentData.user = currentUser
  const { commentId, propertyId } = req.params

  try {
    const property = await Properties.findById(propertyId).populate('user').populate('comments.user')

    if (!property) {
      return res.status(404).send({ message: 'Not found' })
    }

    const comment = property.comments.id(commentId)

    if (!comment.user._id.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    comment.set(commentData)

    const savedProperty = await property.save()

    res.send(savedProperty)

  } catch (err) {
    next(err)
  }
}

async function removeComment(req, res, next) {
  const currentUser = req.currentUser

  const { commentId, propertyId } = req.params

  try {
    const property = await Properties.findById(propertyId).populate('user').populate('comments.user')

    if (!property) {
      return res.status(404).send({ message: 'Not found' })
    }

    const comment = property.comments.id(commentId)

    if (!comment.user._id.equals(currentUser._id)) {
      return res.status(401).send({ message: 'Unauthorized' })
    }

    comment.remove()

    const savedProperty = await property.save()
    res.send(savedProperty)

  } catch (err) {
    next(err)
  }
}

export default {
  makeComment,
  updateComment,
  removeComment
}