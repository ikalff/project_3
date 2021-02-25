import React, { useEffect, useState } from 'react'


export default function PropertyForm({ formData, handleSubmit, handleChange, handleImages, handleCheckBox, location }) {


  const [images, updateImages] = useState(formData.images)

  useEffect(() => {
    updateImages(formData.images)
  }, [formData.images])


  let widget = window.cloudinary.createUploadWidget({
    cloudName: 'ikalff',
    uploadPreset: 'imagepreset'
  },
    (error, result) => {
      checkUploadResult(result)
    })

  function checkUploadResult(resultEvent) {
    if (resultEvent.event === 'queues-end') {
      const newImages = [...images]
      resultEvent.info.files.forEach(file => {
        newImages.push(file.uploadInfo.secure_url)
      })
      updateImages(newImages)
      handleImages(newImages)
    }
  }

  function showWidget(event) {
    event.preventDefault()
    widget.open()
  }

  function deleteImage(event, index) {
    event.preventDefault()
    const newImages = [...images]
    newImages.splice(index, 1)
    updateImages(newImages)
    handleImages(newImages)
  }

  console.log(formData)
 console.log(formData['propertyType'])

  return <div className='override'>

    <form onSubmit={handleSubmit}>
      <p className='mb-5'>Fields marked with  <span className='has-text-danger'>*</span> are required</p>


      <label className="label">
        Property Name <span className='has-text-danger'>*</span>:</label>
      <div className="control">
        <input
          className='input'
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
          className='input'
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
          className='input'
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
          className='textarea'
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
          className='textarea'
          type="text"
          onChange={handleChange}
          value={formData['cancellationPolicy']}
          name='cancellationPolicy'
        />
      </div>



   


      <label className="label">
        Property type: <span className='has-text-danger'>*</span></label>
      <div className='select'>
        <select
          onChange={handleChange}
          value={formData['propertyType']}
          name='propertyType'
        >
          <option value=''>Please select</option>
          <option>Entire place</option>
          <option>Private room</option>
        </select>
      </div>
 




      <label className="label">
        Price per night: <span className='has-text-danger'>*</span></label>
      <div className="control">
        <input
          className='input'
          type="text"
          onChange={handleChange}
          value={formData['pricePerNight']}
          name='pricePerNight'
        />
      </div>

      <label className="label">
        Number of bedrooms: <span className='has-text-danger'>*</span></label>
      <div className='select'>
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
      <div className='select'>
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
      <div className='select'>
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
      <div className='select'>
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


      <h5 className='title is-5 mt-4 mb-2'>Amenities:</h5>
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


        <h5 className='title is-5 mt-4 mb-3'>
          Upload images  <span className='has-text-danger'>*</span>:</h5>


        <button onClick={showWidget} className='button mb-5'>Upload</button>
        <div className='imagegallery columns is-multiline'>
          {
            images.map((image, index) => {
              return <div key={index} className='column is-one-quarter'>
                <img src={image} className='mb-2'></img>
                <button className='button is-danger is-small' onClick={(event) => {
                  deleteImage(event, index)
                }}
                >Delete image</button>
              </div>
            })

          }
        </div>

      </div>

      <button className="button mt-5 is-primary">Save property</button>
    </form>
  </div >
}
