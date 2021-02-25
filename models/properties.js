import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, { timestamps: true }
)

const bookingSchema = new mongoose.Schema({
  propertyName: { type: String },
  propertyId: { type: String },
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
  name: { type: String, required: true, unique: true,
    validate: (name) => {
      return name.length > 1 
    }
  },
  location: { type: String, required: true, unique: false },
  images: { type: Array, required: true, unique: false },
  propertyType: { type: String, required: true, unique: false },
  pricePerNight: { type: Number, required: true, unique: false },
  summary: { type: String, required: true, unique: false },
  houseRules: { type: String, required: true, unique: false },
  cancellationPolicy: { type: String, required: true, unique: false },
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


