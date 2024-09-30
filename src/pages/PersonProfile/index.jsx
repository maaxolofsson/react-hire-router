import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({ people, hire }) {
  const [person, setPerson] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const personToFind = people.find(p => p.index === parseInt(id))
    setPerson(personToFind);
  })

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hire={hire(person)} />
    </article>
  )
}

export default PersonProfile
