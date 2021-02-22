import Properties from '../../models/properties.js'
import User from '../../models/users.js'

export default async function setup(done) {
  const users = await User.create([
    {
      first_name: 'Cal',
      last_name: 'Richards',
      email: 'cal@cal.com',
      password: 'passwords',
      passwordConfirmation: 'passwords',
      isHost: true,
      isAdmin: false 
    },
    {
      first_name: 'Bojana',
      last_name: 'Sarenac',
      email: 'bojana@bojana.com',
      password: 'passwords1',
      passwordConfirmation: 'passwords1',
      isHost: false,
      isAdmin: false 
    }
  ])
  await Properties.create([
    {
      name: 'Lovely seaside cottage',
      location: 'Suffolk',
      images: [
        'https://i.imgur.com/2XrkGA7.jpg',
        'http://placehold.it/400x400',
        'http://placehold.it/400x400'
      ],
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 100,
      summary: 'A spacious cottage with gorgeous seaside views, extremely cosy and family-friendly',
      houseRules: 'Strictly no smoking and no overnight guests',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '15:00',
      checkOutTime: '12:00',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: false
        },
        {
          amenityName: 'Wheelchair Accessible',
          amenityValue: true
        },
        {
          amenityName: 'Washing machine',
          amenityValue: false
        },
        {
          amenityName: 'Near a beach',
          amenityValue: false
        }
      ],
      host: users[0],
      comments: [],
      bookings: []
    },


    {
      name: 'Luxury room in Bath',
      location: 'Bath',
      images: ['https://i.imgur.com/dHjBMUV.jpg'],
      isRoomOnly: true,
      isEntirePlace: false,
      pricePerNight: 80,
      summary: 'A luxurious room with ensuite bathroom, in the heart of Bath',
      numberOfBedrooms: 1,
      maxNumberOfGuests: 2,
      checkInTime: '15:00',
      checkOutTime: '10:00',
      houseRules: 'Strictly no smoking and no overnight guests',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: false
        },
        {
          amenityName: 'Wheelchair Accessible',
          amenityValue: true
        },
        {
          amenityName: 'Washing machine',
          amenityValue: true
        },
        {
          amenityName: 'Near a beach',
          amenityValue: true
        }
      ],
      host: users[0],
      comments: [],
      bookings: []
    }
  ])
  done()
}
