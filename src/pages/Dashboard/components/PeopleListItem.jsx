import { Link, useNavigate } from "react-router-dom"

function PeopleListItem({ person, index, showWage = false, isHired = false }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/view/${index}`);
  }

  return (
    <li style={{ marginBottom: '10px' }}>
      {isHired ? (
        <>
          <span>{person.firstName} {person.lastName}</span>
          <button onClick={handleEditClick} style={{ marginLeft: '10px' }}>
            Edit
          </button>
        </>
      ) : (
        <Link to={`/view/${index}`} state={{ person }}>
          <h3>{person.firstName} {person.lastName}</h3>
        </Link>
      )}
      {showWage && person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}


export default PeopleListItem
