import React from 'react'
import amenities from '../data/amenities.js'

export default function PropertyForm({ formData, checkboxData, handleSubmit, handleChange, handleCheckBox }) {


  console.log(formData.amenities)
  
  return <form onSubmit={handleSubmit}>



    <label className="label">
      Property Name:</label>
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
      Location:</label>
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
      Summary:</label>
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
      House Rules:</label>
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
      Cancellation Policy:</label>
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
              Is only a room
          </label>
    </div>

    <div className="field">
      <label className="checkbox">
        <input
          className='mr-1'
          type="checkbox"
          onChange={handleChange}
          name='isEntirePlace'
        />
            Is an entire place
          </label>
    </div>


    <label className="label">
      Price per night:</label>
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
      Number of bedrooms:</label>
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
      Maximum number of guests:</label>
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
      Check in time from:</label>
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
      Check out time before:</label>
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


    {
      formData.amenities.map((amenity, index) => {



        return <div key={index} className="field">
          <label className="checkbox">
            <input
              className='mr-1'
              type="checkbox"
              name={amenity.amenityName}
              onChange={handleCheckBox}
              checked={amenity.amenityValue}
            />
            {amenity.amenityName}
          </label>
        </div>
      })
    }

    <button className="button mt-5 is-success">Submit</button>
  </form>
}
