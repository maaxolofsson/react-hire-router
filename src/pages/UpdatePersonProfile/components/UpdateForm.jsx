import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateForm({ people, update }) {
  let { id } = useParams()
  let person = people.find(p => p.index === parseInt(id))
  const [wage, setWage] = useState(0)
  const [firstName, setFirstName] = useState(person.name.first)
  const [lastName, setLastName] = useState(person.name.last)

  function handleSubmit(event) {
    person.wage = wage
    person.name.first = firstName
    person.name.last = lastName
    update(person)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={e => setFirstName(e.target.value)}
        value={firstName}
      />
      <label htmlFor="firstName">Last name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={e => setLastName(e.target.value)}
        value={lastName}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UpdateForm
