export default function getPropertyData() {
  return [
    {
      name: 'Lovely seaside cottage',
      location: 'Suffolk',
      images: {
        main: 'https://i.imgur.com/2XrkGA7.jpg'
      },
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 100,
      summary: 'A spacious cottage with gorgeous seaside views, extremely cosy and family-friendly',
      houseRules: 'Strictly no smoking and no overnight guests',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      numberOfBedrooms: 2,
      checkInTime: '15:00',
      checkOutTime: '12:00',
      hasWifi: true,
      hasWashingMachine: true,
      isPetFriendly: true,
      isWheelchairAccessible: true,
      isNearPub: true,
      isNearBeach: true,
      comments: [],
      bookings: []
    },


    {
      name: 'Luxury room in Bath',
      location: 'Bath',
      images: {
        main: 'https://i.imgur.com/dHjBMUV.jpg'
      },
      isRoomOnly: true,
      isEntirePlace: false,
      pricePerNight: 80,
      summary: 'A luxurious room with ensuite bathroom, in the heart of Bath',
      numberOfBedrooms: 1,
      checkInTime: '15:00',
      checkOutTime: '10:00',
      houseRules: 'Strictly no smoking and no overnight guests',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      hasWifi: true,
      hasWashingMachine: false,
      isPetFriendly: false,
      isWheelchairAccessible: false,
      isNearPub: true,
      isNearBeach: false,
      comments: [],
      bookings: []
    },

    {
      name: 'Charming London Flat',
      location: 'Notting Hill',
      images: {
        main: 'https://i.imgur.com/vDKQudg.jpeg'
      },
      isRoomOnly: false,
      isEntirePlace: true,
      pricePerNight: 160,
      summary: 'Charming Victorian flat on a quiet mews street only steps away from Notting Hill High Street',
      numberOfBedrooms: 2,
      checkInTime: '16:00',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking and no overnight guests. No parties.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      hasWifi: true,
      hasWashingMachine: false,
      isPetFriendly: false,
      isWheelchairAccessible: false,
      isNearPub: true,
      isNearBeach: false,
      comments: [],
      bookings: []
    },

    {
      name: 'Double Room in New Town, Edinburgh',
      location: 'Edinburgh',
      images: {
        main: 'https://i.imgur.com/7h24bWB.jpeg'
      },
      isRoomOnly: true,
      isEntirePlace: false,
      pricePerNight: 75,
      summary: 'Perfect for the Fringe, this double bed has easy access to all the historic sites of Edinburgh',
      numberOfBedrooms: 2,
      checkInTime: '16:30',
      checkOutTime: '11:00',
      houseRules: 'Strictly no smoking. Please be mindful of noise if returning after 10pm.',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
      hasWifi: true,
      hasWashingMachine: true,
      isPetFriendly: false,
      isWheelchairAccessible: false,
      isNearPub: true,
      isNearBeach: false,
      comments: [],
      bookings: []
    }
  ]

}