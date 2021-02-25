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
      propertyType: 'Entire place',
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
      propertyType: 'Private room',
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
      images: ['https://i.imgur.com/YOEdIzM.jpg'],
      propertyType: 'Entire place',
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
          amenityValue: false
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
      propertyType: 'Private room',
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
      propertyType: 'Entire place',
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
          amenityValue: true
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
      host: users[4],
      comments: [],
      bookings: []
    },
    {
      name: 'St Andrews Golf Flat',
      location: 'St Andrews',
      images: [
        'https://i.imgur.com/9beVSXq.jpeg',
        'https://i.imgur.com/mpdAtx6.jpeg'
      ],
      propertyType: 'Entire place',
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
          amenityValue: true
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
      host: users[4],
      comments: [],
      bookings: []
    },
    {
      name: 'Brecon Beacons Holiday Home',
      location: 'Crickhowell',
      images: [
        'https://i.imgur.com/2U7SQwq.jpg'
      ],
      propertyType: 'Entire place',
      pricePerNight: 70,
      summary: 'If you are looking for a place to rest your head while take a Welsh walking Holiday, this is the place for you! Come stay on our family farm and see what Wales has to offer!',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '15:00',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking and no overnight guests. Please keep noise levels down past 11pm. We ask that you don\'t disturb the farm animals.',
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
      propertyType: 'Entire place',
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
      host: users[0],
      comments: [],
      bookings: []
    },
    {
      name: 'Flat share in Manchester',
      location: 'Manchester',
      images: ['https://i.imgur.com/UEC5oG0.jpg'],
      propertyType: 'Private room',
      pricePerNight: 60,
      summary: 'Renting out spare room in our central Manchester Flat. Located close to transport and nightlife.',
      numberOfBedrooms: 1,
      maxNumberOfGuests: 2,
      checkInTime: '17:00',
      checkOutTime: '12:00',
      houseRules: 'Strictly no smoking and no overnight guests.',
      cancellationPolicy: '100% deposit refund up until 24 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
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
      name: 'Cornish Seaside Estate',
      location: 'St Ives',
      images: [
        'https://i.imgur.com/K0Gx4yp.jpeg'
      ],
      propertyType: 'Entire place',
      pricePerNight: 270,
      summary: 'Looking for a summer get away for your Great British Summer? Stay at our lovely seaside estate, near beaches and teh town of St Ives',
      numberOfBedrooms: 5,
      maxNumberOfGuests: 8,
      checkInTime: '16:00',
      checkOutTime: '12:00',
      houseRules: 'Strictly no smoking and no overnight guests. Please keep noise levels down past 10pm. No parties',
      cancellationPolicy: '100% deposit refund up until 72 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
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
          amenityValue: true
        }
      ],
      host: users[1],
      comments: [],
      bookings: []
    },

    {
      name: 'Highlands Retreat',
      location: 'Glen Coe',
      images: [
        'https://i.imgur.com/DvVVMs6.jpg'
      ],
      propertyType: 'Entire place',
      pricePerNight: 230,
      summary: 'Live out your Outlander dreams in this stunning Glen Coe Cottage, converted from a traditional bothy. Your prefect remote getaway to explore all the Scottish Highlands have to offer.',
      numberOfBedrooms: 3,
      maxNumberOfGuests: 7,
      checkInTime: '16:00',
      checkOutTime: '12:00',
      houseRules: 'Strictly no smoking and no overnight guests. Please keep noise levels down past 10pm. No parties',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: true
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
      host: users[4],
      comments: [],
      bookings: []
    },

    {
      name: 'English Castle by the Seashore',
      location: 'Seahouses',
      images: [
        'https://i.imgur.com/QDrPhLH.jpeg'
      ],
      propertyType: 'Entire place',
      pricePerNight: 270,
      summary: 'Walk in the footsteps of the famous Lady Bojana as you explore this gorgeous castle in Seahouses, England. Admire the view as you stay in one of the stunning authentic period bedrooms.',
      numberOfBedrooms: 3,
      maxNumberOfGuests: 7,
      checkInTime: '16:00',
      checkOutTime: '12:00',
      houseRules: 'Strictly no smoking and no overnight guests. No parties',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: true
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
          amenityValue: true
        }
      ],
      host: users[1],
      comments: [],
      bookings: []
    },

    {
      name: 'Kittiwake Cottage',
      location: 'Brighton',
      images: ['https://i.imgur.com/VWk8m9v.jpeg'],
      propertyType: 'Entire place',
      pricePerNight: 130,
      summary: 'Within easy walking distance of several pristine beaches - the location is perfect for a seaside getaway that\'s not too far from the hustle and bustle of city life',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 5,
      checkInTime: '16:30',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking. Well-behaved dogs are welcome.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
        },
        {
          amenityName: 'Pet friendly',
          amenityValue: true
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
      host: users[3],
      comments: [],
      bookings: []
    },
    {
      name: 'Bright and cheerful terraced house',
      location: 'Cotswolds',
      images: ['https://i.imgur.com/GJ4tgtF.jpg'],
      propertyType: 'Entire place',
      pricePerNight: 130,
      summary: 'This gorgeous bright house won\'t fail to cheer you up - our visitors love coming back again and again',
      numberOfBedrooms: 3,
      maxNumberOfGuests: 5,
      checkInTime: '12:00',
      checkOutTime: '10:00',
      houseRules: 'Strictly no smoking. No pets please.',
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
      name: 'Remote house in Cornwall',
      location: 'Cornwall',
      images: ['https://i.imgur.com/Isvlyqu.jpg'],
      propertyType: 'Entire place',
      pricePerNight: 110,
      summary: 'If you\'re looking to escape in nature, look no further - you\'ll love the enormous private garden and outdoor activities on offer nearby',
      numberOfBedrooms: 3,
      maxNumberOfGuests: 6,
      checkInTime: '14:00',
      checkOutTime: '10:00',
      houseRules: 'Smoking is only permitted outside in the garden. No parties please and well-behaved pets are welcome.',
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
      name: 'Stone terraced house in Lancashire',
      location: 'Lancashire',
      images: ['https://i.imgur.com/F7RQeNH.jpg'],
      propertyType: 'Entire place',
      pricePerNight: 180,
      summary: 'You\'ll love the internet speed.',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '14:00',
      checkOutTime: '10:00',
      houseRules: 'Smoking is not allowed. 2 pets maximum.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
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
      host: users[0],
      comments: [],
      bookings: []
    },
    {
      name: 'Bright room in Manchester',
      location: 'Manchester',
      images: ['https://i.imgur.com/cuDHOWO.jpg'],
      propertyType: 'Private room',
      pricePerNight: 40,
      summary: 'This is a bright, spacious room with a double bed - the house is quiet and a short bus ride away from the city centre.',
      numberOfBedrooms: 1,
      maxNumberOfGuests: 2,
      checkInTime: '14:00',
      checkOutTime: '10:00',
      houseRules: 'This is a no smoking house and pets are not permitted.',
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
          amenityValue: false
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
      name: 'Stylish room in Oxford',
      location: 'Oxford',
      images: ['https://i.imgur.com/b8cCjM0.jpg'],
      propertyType: 'Private room',
      pricePerNight: 55,
      summary: 'The room is clean and stylish, very popular with visiting students. There are plenty of cafes and parks near this unusually colourful street.',
      numberOfBedrooms: 1,
      maxNumberOfGuests: 1,
      checkInTime: '14:00',
      checkOutTime: '10:00',
      houseRules: 'Smoking is only permitted outside in the garden. No pets or visitors are allowed.',
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
      name: 'Oxford house with beautiful garden',
      location: 'Oxford',
      images: ['https://i.imgur.com/Krvf5gO.jpg'],
      propertyType: 'Entire place',
      pricePerNight: 200,
      summary: 'You\'ll love these beautiful gardens any time of the year. The house is ideally located for a holoiday exploring the Oxford countryside.',
      numberOfBedrooms: 3,
      maxNumberOfGuests: 5,
      checkInTime: '14:00',
      checkOutTime: '10:00',
      houseRules: 'Smoking is only permitted outside in the garden. No pets or visitors are allowed.',
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
          amenityValue: false
        }
      ],
      host: users[3],
      comments: [],
      bookings: []
    },
    {
      name: 'Spare room in London family house',
      location: 'London',
      images: ['https://i.imgur.com/BOeLD1a.jpg'],
      propertyType: 'Private room',
      pricePerNight: 60,
      summary: 'Just 5 minutes away from the Tube - ideal for short London trips.',
      numberOfBedrooms: 1,
      maxNumberOfGuests: 2,
      checkInTime: '14:00',
      checkOutTime: '10:00',
      houseRules: 'Smoking is not allowed. No pets.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time.',
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
          amenityValue: false
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
      name: 'Refurbished Devon lighthouse',
      location: 'Devon',
      images: ['https://i.imgur.com/KshUfSq.jpg'],
      propertyType: 'Entire place',
      pricePerNight: 180,
      summary: 'Looking for something different? How about a stay in this beautiful lighthouse with unbeatable views on the coast of Devon?',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '14:00',
      checkOutTime: '10:00',
      houseRules: 'Smoking is not permitted. Please respect our neighbours by keeping noise to a minimum after 10pm. ',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      amenities: [
        {
          amenityName: 'Wifi',
          amenityValue: true
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
          amenityValue: true
        }
      ],
      host: users[0],
      comments: [],
      bookings: []
    },
    {
      name: 'Modern beach house in Devon',
      location: 'Devon',
      images: ['https://i.imgur.com/KKkJJYh.jpg'],
      propertyType: 'Entire place',
      pricePerNight: 180,
      summary: 'This house has been recently refurbished and we\'ve taken to make it as family-friendly as possible - there are plenty of beach toys for guests to help themselves to.',
      numberOfBedrooms: 2,
      maxNumberOfGuests: 4,
      checkInTime: '14:00',
      checkOutTime: '10:00',
      houseRules: 'Smoking is only permitted outside in the garden. No parties or pets are allowed.',
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
      host: users[3],
      comments: [],
      bookings: []
    }
  ]

}