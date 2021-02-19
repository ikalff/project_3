import Properties from '../models/properties.js'
// ! NEED TO AD ADMINS
async function makeComment(req, res, next) {

  const commentData = req.body
  const propertyId = req.params.propertyId
  commentData.user = req.currentUser

  try {
    const property = await Properties.findById(propertyId).populate('comments.user').populate('user')

    if (!property) {
      return res.status(404).send({ message: 'Not found' })
    }

    property.comments.push(commentData)

    const savedProperty = await property.save()

    res.send(savedProperty)

  } catch (err) {
    next(err)
  }
}

async function updateComment(req, res, next) {
  const commentData = req.body
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