import PeopleListItem from './PeopleListItem'

function PeopleList(props) {
  const { people } = props

  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.index} person={person} />
      ))}
    </ul>
  )
}

export default PeopleList
