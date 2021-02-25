import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseHidden from 'mongoose-hidden'
import uniqueValidator from 'mongoose-unique-validator'

const schema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: true,
    validate: (first_name) => {
      return first_name.length > 1 && !first_name.includes('1234567890')
    } 
  },
  last_name: { 
    type: String, 
    required: true,
    validate: (last_name) => {
      return last_name.length > 1 && !last_name.includes('1234567890')
    } 
  },
  email: { type: String, 
    required: true, 
    unique: true,
    validate: (email) => {
      return email.length > 4 && email.includes('@')
    } 
  },
  password: { 
    type: String, 
    required: true,
    validate: (password) => {
      return password.length >= 6
    } 
  },
  isHost: { type: Boolean },
  isAdmin: { type: Boolean },
  bio: { type: String }
})

schema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
  next()
})

schema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

schema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

schema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && (this.password !== this._passwordConfirmation)) {
      this.invalidate('passwordConfirmation', 'should match password')
    }
    next()
  })

schema.plugin(uniqueValidator)
schema.plugin(mongooseHidden({ defaultHidden: { password: true } }))

export default mongoose.model('User', schema)