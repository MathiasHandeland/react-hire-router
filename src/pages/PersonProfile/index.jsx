import { useParams, useNavigate } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile({ people, hirePerson, hiredPeople }) {
  const { id } = useParams();
  const person = people[id];
  const navigate = useNavigate();

  if (!person) return <p>Loading...</p>

  const handleHire = (person, wage) => {
    hirePerson(person, wage)
    navigate('/')
  }
  
   // Check if this person has already been hired to retrieve wage
  const currentHire = hiredPeople.find(p => p.id === person.id)
  const currentWage = currentHire ? currentHire.wage : ''

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {/* display current wage if any */}
      {currentHire && <p>Current Wage: ${currentHire.wage}</p>}
      <HireForm person={person} hirePerson={handleHire} currentWage={currentWage} />
    </article>
  )
}

export default PersonProfile
