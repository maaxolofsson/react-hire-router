import { useState } from 'react'

function HireForm({ person, hire }) {
  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    person.wage = wage
    person.hired = true
    hire(person)
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
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
