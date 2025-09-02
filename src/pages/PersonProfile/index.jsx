import { useParams, useNavigate } from "react-router-dom";
import HireForm from './components/HireForm'

function PersonProfile({ people, hirePerson }) {
  const { id } = useParams();
  const personObj = people.find(p => p.index === Number(id))
  const navigate = useNavigate();

  if (!personObj) return <p>Loading...</p>

  const handleHire = (wage) => {
    hirePerson(personObj.index, wage)
    navigate('/')
  }
  
  return (
    <article>
      <h2>
        {personObj.firstName} {personObj.lastName}
      </h2>
      <HireForm person={personObj} hirePerson={handleHire} currentWage={personObj.wage} />
    </article>
  )
}

export default PersonProfile
