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
    }
  ]

}