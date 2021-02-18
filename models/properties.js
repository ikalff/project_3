import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, 
  userFirstName: { type: String, ref: 'User', required: true }
},
{ timestamps: true }
)

const bookingSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, 
  checkInDate: { type: String, required: true },
  checkOutDate: { type: String, required: true },
  numberOfGuests: { type: Number, required: true }
}, { timestamps: true }
)

const propertiesSchema = new mongoose.Schema({ 
  name: { type: String, required: true, unique: true },
  location: { type: String, required: true, unique: false },
  images: { type: Object, required: true, unique: false },
  isRoomOnly: { type: Boolean, required: true, unique: false },
  isEntirePlace: { type: Boolean, required: true, unique: false },
  pricePerNight: { type: Number, required: true, unique: false },
  summary: { type: String, required: true, unique: false },
  houseRules: { type: String, required: true, unique: false },
  cancellationPolicy: { type: String, required: true, unique: false },
  numberOfBedrooms: { type: Number, required: true, unique: false },
  checkInTime: { type: String, required: true, unique: false },
  checkOutTime: { type: String, required: true, unique: false },
  hasWifi: { type: Boolean, required: true, unique: false },
  hasWashingMachine: { type: Boolean, required: true, unique: false },
  isPetFriendly: { type: Boolean, required: true, unique: false },
  isWheelchairAccessible: { type: Boolean, required: true, unique: false },
  isNearPub: { type: Boolean, required: true, unique: false },
  isNearBeach: { type: Boolean, required: true, unique: false },
  comments: [ commentSchema ],
  bookings: [ bookingSchema ]

})

propertiesSchema.plugin(uniqueValidator)

export default mongoose.model('Properties', propertiesSchema)


