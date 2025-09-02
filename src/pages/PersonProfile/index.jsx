import { useParams, useNavigate } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile({ people, hirePerson }) {
  const { id } = useParams(); // gets the id from the URL
  const person = people.find(p => p.id === Number(id)) // finds the person by id
  const navigate = useNavigate();

  if (!person) return <p>Loading...</p>

  const handleHiring = (wage) => {
    hirePerson(person.id, wage)
    navigate('/')
  }
  
  return (
    <article>
      <h2>
        {person.firstName} {person.lastName}
      </h2>
      <HireForm person={person} hirePerson={handleHiring} currentWage={person.wage} />
    </article>
  )
}

export default PersonProfile
