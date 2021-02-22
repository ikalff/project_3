import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropertyForm from './PropertyForm'

export default function UpdatePokemon({ history, match }) {

  const pokemonId = match.params.pokemonId

  const [formData, updateFormData] = useState({
    name: '',
    weight: '',
    image: '',
    types: []
  })

  useEffect(() => {
    axios.get(`/api/pokemon/${pokemonId}`)
      .then(({ data }) => {
        const mappedFormData = {
          ...data,
          types: data.types.map(type => {
            return { value: type, label: type[0].toUpperCase() + type.slice(1) }
          })
        }
        updateFormData(mappedFormData)
      })
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const newFormData = {
      ...formData,
      types: formData.types.map(type => type.value)
    }
    try {
      const { data } = await axios.put(`/api/pokemon/${pokemonId}`, newFormData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data._id)
      history.push(`/pokemon/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return <PropertyForm
    handleChange={handleChange}
    handleTypeChange={(types) => updateFormData({ ...formData, types })}
    handleSubmit={handleSubmit}
    formData={formData}
  />
}