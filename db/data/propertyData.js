export default function getPropertyData() {
  return [
    {
      id: 0,
      name: 'Lovely seaside cottage',
      location: 'Suffolk',
      images: {
      main: 'https://i.imgur.com/2XrkGA7.jpg'
    },
      isRoomOnly: false,
      isEntirePlace: true,
    
      pricePerNight: 50,
     
      description: {
        summary: 'A spacious cottage with gorgeous seaside views, extremely cosy and family-friendly',
        houseRules: 'Strictly no smoking and no overnight guests',
        cancellationPolicy: '100% deposit refund up until 48 hours before check-in time'
      },
      numberOfBedrooms: 2,
      //! call library function parse strings and compare times: date.parse
      checkInTime: '15:00',
      checkOutTime: '12:00',
      hasWifi: true,
      hasWashingMachine: true,
      isPetFriendly: true,
      isWheelchairAccessible: true,
      isNearPub: true,
      isNearBeach: true,
      comments: [
        {
        id: 0,
         //! add text field to comment property object in schema draft 
        text: 'Loved it here, can\'t wait to stay again',
        user: {
          user.firstName: '',
          user.id: 0
        },
        createdAt: '2021-02-16T11:28:27.840Z',
        updatedAt: '2021-02-16T19:11:01.524Z'
      }],
      bookings:[
        {
          id: 0
          user.id: 0
          checkInDate: ,
          checkOutDate: ,
          numberOfGuests: 3
      }]
    },
  
  
  {
    id: 1,
    name: 'Luxury room in Bath',
    location: 'Bath',
    images: {
    main: 'https://i.imgur.com/dHjBMUV.jpg'
  },
    isRoomOnly: true,
    isEntirePlace: false,
    //! change in schema to pricePerNight?
    pricePerNight: 80,
    //! edit the description so that numberOfBedrooms, checkInTime and checkOPutTime are not part of the description object?
    description: {
      summary: 'A luxurious room with ensuite bathroom, in the heart of Bath',
      numberOfBedrooms: 1,
      //! change in schema to 2 separate properties checkInTime and checkOutTime
      //! call library function parse strings and compare times: date.parse
      checkInTime: '15:00',
      checkOutTime: '10:00',
      houseRules: 'Strictly no smoking and no overnight guests',
      cancellationPolicy: '100% deposit refund up until 48 hours before check-in time',
    },
    hasWifi: true,
    hasWashingMachine: false,
    isPetFriendly: false,
    isWheelchairAccessible: false,
    isNearPub: true,
    isNearBeach: false,
    comments: [
      {
      id: 1,
      text: 'Lovely decor and a great place to stay for a weekend visit',
      user: {
        user.firstName: '',
        user.id: 0
      },
      //! add text field to comment property object in schema draft 
      createdAt: '2021-02-16T11:28:27.840Z',
      updatedAt: '2021-02-16T19:11:01.524Z'
    }],
    bookings: [
      {
        id: 0,
        user.id: 1,
        checkInDate: ,
        checkOutDate:  ,
        numberOfGuests: 1
    }]
  }

]

}