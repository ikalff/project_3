import React, { useState } from 'react'


export default function PropertyForm({ formData, checkboxData, handleSubmit, handleChange, handleCheckBox, location }) {

  const [images, updateImages] = useState([
    'http://placehold.it/600x400',
    'http://placehold.it/600x400/ffcc00/ffffff',
    'http://placehold.it/600x400/ff0000/ffffff'
  ])

  console.log(formData.amenities)

  let widget = window.cloudinary.createUploadWidget({
    cloudName: 'ikalff',
    uploadPreset: 'imagepreset'
  },
    (error, result) => { checkUploadResult(result) })

  function checkUploadResult(resultEvent) {
    console.log(resultEvent)
    if (resultEvent.event === 'success') {
      const newImages = [...images]
      newImages.push(resultEvent.info.secure_url)
      updateImages(newImages)
    }
  }

  function showWidget(event) {
    event.preventDefault()
    widget.open()
  }

  function deleteImage(index) {
    console.log(index)
    const newImages = [...images]
    newImages.splice(index, 1)
    console.log(newImages)
    updateImages(newImages)
  }



  return <div>


    {
      images.map((image, index) => {
        return <div key={index}>
          <img  width='100' src={image}></img>
          <button onClick={() => deleteImage(index)}>Delete</button>
        </div>
})

    }

    <button onClick={showWidget}>Upload</button>


    <form onSubmit={handleSubmit}>
      <p className='mb-5'>Fields marked with  <span className='has-text-danger'>*</span> are required</p>


      <label className="label">
      Property Name <span className='has-text-danger'>*</span>:</label>
      <div className="control">
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={formData['name']}
          name='name'
        />
      </div>

      <label className="label">
      Location <span className='has-text-danger'>*</span>:</label>
      <div className="control">
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={formData['location']}
          name='location'
        />
      </div>

      <label className="label">
      Summary <span className='has-text-danger'>*</span>:</label>
      <div className="control">
        <textarea
          className="textarea"
          type="text"
          onChange={handleChange}
          value={formData['summary']}
          name='summary'
        />
      </div>

      <label className="label">
      House Rules <span className='has-text-danger'>*</span>:</label>
      <div className="control">
        <textarea
          className="textarea"
          type="text"
          onChange={handleChange}
          value={formData['houseRules']}
          name='houseRules'
        />
      </div>

      <label className="label">
      Cancellation Policy <span className='has-text-danger'>*</span>:</label>
      <div className="control">
        <textarea
          className="textarea"
          type="text"
          onChange={handleChange}
          value={formData['cancellationPolicy']}
          name='cancellationPolicy'
        />
      </div>



      <div className="field">
        <label className="checkbox">
          <input
            className='mr-1'
            type="checkbox"
            onChange={handleChange}
            name='isRoomOnly'
          />
        Is only a room </label>
      </div>

      <div className="field">
        <label className="checkbox">
          <input
            className='mr-1'
            type="checkbox"
            onChange={handleChange}
            name='isEntirePlace'
          />
        Is an entire place</label>
      </div>


      <label className="label">
      Price per night: <span className='has-text-danger'>*</span></label>
      <div className="control">
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={formData['pricePerNight']}
          name='pricePerNight'
        />
      </div>

      <label className="label">
      Number of bedrooms: <span className='has-text-danger'>*</span></label>
      <div className="select">
        <select
          onChange={handleChange}
          value={formData['numberOfBedrooms']}
          name='numberOfBedrooms'
        >
          <option value=''>Please select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>

      <label className="label">
      Maximum number of guests: <span className='has-text-danger'>*</span></label>
      <div className="select">
        <select
          onChange={handleChange}
          value={formData['maxNumberOfGuests']}
          name='maxNumberOfGuests'
        >
          <option value=''>Please select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>




      <label className="label">
      Check in time from: <span className='has-text-danger'>*</span></label>
      <div className="select">
        <select
          onChange={handleChange}
          value={formData['checkInTime']}
          name='checkInTime'
        >
          <option value=''>Please select</option>
          <option>05:00</option>
          <option>06:00</option>
          <option>07:00</option>
          <option>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
          <option>23:00</option>
        </select>
      </div>


      <label className="label">
      Check out time before: <span className='has-text-danger'>*</span></label>
      <div className="select">
        <select
          onChange={handleChange}
          value={formData['checkOutTime']}
          name='checkOutTime'
        >
          <option value=''>Please select</option>
          <option>05:00</option>
          <option>06:00</option>
          <option>07:00</option>
          <option>08:00</option>
          <option>09:00</option>
          <option>10:00</option>
          <option>11:00</option>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>15:00</option>
          <option>16:00</option>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
          <option>23:00</option>
        </select>
      </div>

      <div className='mt-4'>
        {
          formData.amenities.map((amenity, index) => {

            if (location === 'makeProperty') {

              return <div key={index} className="field">
                <label className="checkbox">
                  <input
                    className='mr-1'
                    type="checkbox"
                    name={amenity.amenityName}
                    onChange={handleCheckBox}
                  />
                  {amenity.amenityName}
                </label>
              </div>
            } else {
              return <div key={index} className="field">
                <label className="checkbox">
                  <input
                    className='mr-1'
                    type="checkbox"
                    name={amenity.amenityName}
                    onChange={handleCheckBox}
                    checked={amenity.amenityValue === true ? true : false}
                  />
                  {amenity.amenityName}
                </label>
              </div>
            }

          })
        }
      </div>

      <button className="button mt-5 is-success">Submit</button>
    </form>
  </div >
}
