import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, { timestamps: true }
)

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  datesBooked: { type: Array, required: true },
  numberOfGuests: { type: Number, required: true }
}, { timestamps: true }
)

const amenitySchema = new mongoose.Schema({
  amenityName: { type: String, required: true },
  amenityValue: { type: Boolean, required: true }
})

const propertiesSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true,
    validate: (propName) => {
      return propName.length > 3
    } 
  },
  location: { 
    type: String, 
    required: true, 
    unique: false,
    validate: (location) => {
      return location.length > 1
    } 
  },
  images: { type: Array, required: true, unique: false },
  isRoomOnly: { type: Boolean, required: true, unique: false },
  isEntirePlace: { type: Boolean, required: true, unique: false },
  pricePerNight: { type: Number, required: true, unique: false },
  summary: { 
    type: String, 
    required: true, 
    unique: false,
    validate: (summary) => {
      return summary.length > 3
    } 
  },
  houseRules: { 
    type: String, 
    required: true, 
    unique: false,
    validate: (rules) => {
      return rules.length > 3
    } 
  },
  cancellationPolicy: { 
    type: String, 
    required: true, 
    unique: false,
    validate: (policy) => {
      return policy.length > 3
    } 
  },
  numberOfBedrooms: { type: Number, required: true, unique: false },
  maxNumberOfGuests: { type: Number, required: true, unique: false },
  checkInTime: { type: String, required: true, unique: false },
  checkOutTime: { type: String, required: true, unique: false },
  amenities: [amenitySchema],
  host: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
  bookings: [bookingSchema]
})

propertiesSchema.plugin(uniqueValidator)

export default mongoose.model('Properties', propertiesSchema)


