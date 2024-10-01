import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UpdateForm from './components/UpdateForm'

function UpdatePersonProfile({ people, update }) {
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
      <UpdateForm person={person} update={update(person)} />
    </article>
  )
}

export default UpdatePersonProfile
