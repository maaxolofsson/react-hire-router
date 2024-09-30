import { Link } from "react-router-dom"

function PeopleListItem({ person }) {
  return (
    <li style={{ borderBottom: "1px solid" }}>
      <img src={person.picture.large} alt="Image of person" style={{ margin: "10px" }} />
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      <p>Wage: {person.wage}</p>
      <Link style={{ margin: "5px" }} to={"/view/" + person.index}>
        View profile
      </Link>
    </li>
  )
}

export default PeopleListItem