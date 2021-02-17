import mongoose from 'mongoose'
import connectToDb from '../lib/connectToDb.js'
//! update below 2 lines when those files are made
import Books from '../models/*****/.js'
import User from '../models/****/.js'
import getPropertyData from './data/propertyData.js'
import getUserData from './data/userData.js'

async function seedDatabase() {
  try {
    await connectToDb()

    console.log('🤖 Database connected!')

    await mongoose.connection.db.dropDatabase()

    console.log('🤖 Database was dropped!')

    const users = await User.create(getUserData())

    console.log(`🤖 ${users.length} users created!`)

    const books = await Properties.create(getPropertiesData())

    console.log(`🤖 ${books.length} books created!`)

    await mongoose.connection.close()
    console.log('🤖 Goodbye!')

  } catch (err) {
    console.log('🤖 Something went wrong with seeding!')
    console.log(err)

    await mongoose.connection.close()
    console.log('🤖 Goodbye!')
  }
}

seedDatabase()