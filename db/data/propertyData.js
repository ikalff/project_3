export default function getPropertyData(users) {
  return [
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
    },

    {
      name: 'Charming London Flat',
      location: 'Notting Hill',
      images: ['https://www.londonperfect.com/blog/wp-content/uploads/2019/03/Notting-Hills-Most-Colorful-Streets-by-London-Perfect.jpg'],
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 160,
      summary: 'Charming Victorian flat on a quiet mews street only steps away from Notting Hill High Street',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '16:00',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking and no overnight guests. No parties.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: false
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: true
        },
        {
          amenityName: 'Wheelchair Accessible',
          amenityValue: false
        },
        {
          amenityName: 'Washing machine',
          amenityValue: false
        },
        {
          amenityName: 'Near a beach',
          amenityValue: true
        }
      ],
      host: users[3],
      comments: [],
      bookings: []
    },

    {
      name: 'Double Room in New Town, Edinburgh',
      location: 'Edinburgh',
      images: ['https://i.imgur.com/7h24bWB.jpeg'],
      isRoomOnly: true,
      isEntirePlace: false,
      pricePerNight: 75,
      summary: 'Perfect for the Fringe, this double bed has easy access to all the historic sites of Edinburgh',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 3,
      checkInTime: '16:30',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking. Please be mindful of noise if returning after 10pm.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: false
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: true
        },
        {
          amenityName: 'Wheelchair Accessible',
          amenityValue: false
        },
        {
          amenityName: 'Washing machine',
          amenityValue: true
        },
        {
          amenityName: 'Near a beach',
          amenityValue: false
        }
      ],
      host: users[3],
      comments: [],
      bookings: []
    },

    {
      name: 'Cozy seaside retreat in Jersey',
      location: 'Jersey',
      images: ['https://i.imgur.com/Y9V9enW.jpeg'],
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 110,
      summary: 'A cozy seaside cottage on the eastern side of Jersey. Perfect for a family weekend away!',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 5,
      checkInTime: '15:00',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking and no overnight guests. Please keep noise levels down past 11pm.',
      cancellationPolicy: '100% deposit refund up until 72 hours before check-in time',
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
    },

    {
      name: 'St Andrews Golf Flat',
      location: 'St Andrews',
      images: [
        'https://i.imgur.com/sPivRA0.jpeg',
        'https://i.imgur.com/mpdAtx6.jpeg'
      ],
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 160,
      summary: 'This flat is perfect for a group of golfers looking to play the many courses of St Andrews Links!',
      numberOfBedrooms: 4,
      maxNumberOfGuests: 5,
      checkInTime: '16:00',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking and no overnight guests. Please keep noise levels down past 11pm.',
      cancellationPolicy: '100% deposit refund up until 72 hours before check-in time',
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
      host: users[1],
      comments: [],
      bookings: []
    },

    {
      name: 'Brecon Beacons Holiday Home',
      location: 'Crickhowell',
      images: [
        'https://i.imgur.com/2U7SQwq.jpg'
      ],
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 70,
      summary: 'If you are looking for a place to rest your head while take a Welsh walking Holiday, this is the place for you! Come stay on our family farm and see what Wales has to offer!',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '15:00',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking and no overnight guests. Please keep noise levels down past 11pm. We ask that you don\'t disturb the farm animals',
      cancellationPolicy: '100% deposit refund up until 72 hours before check-in time',
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
          amenityValue: false
        },
        {
          amenityName: 'Washing machine',
          amenityValue: true
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
      name: 'Dreamy Scottish Castle',
      location: 'Lochgilphead',
      images: [
        'https://i.imgur.com/XLGY70c.jpeg'
      ],
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 170,
      summary: 'Calling all Outlander fans! This small Scottish castle can be yours for an evening, or a whole week! Come visit for a lovely getaway close to the island and Highlands of Scotland.',
      numberOfBedrooms: 4,
      maxNumberOfGuests: 9,
      checkInTime: '15:00',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking and no overnight guests. Please keep noise levels down past 11pm. This is an old building, please be respectful of the artifacts!',
      cancellationPolicy: '100% deposit refund up until 72 hours before check-in time',
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
          amenityValue: false
        },
        {
          amenityName: 'Washing machine',
          amenityValue: true
        },
        {
          amenityName: 'Near a beach',
          amenityValue: false
        }
      ],
      host: users[1],
      comments: [],
      bookings: []
    }
  ]

}