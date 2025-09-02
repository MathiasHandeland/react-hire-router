import { Link, useNavigate } from "react-router-dom"

function PeopleListItem({ person, id, showWage = false, isHired = false }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/view/${id}`);
  }

  return (
    <li>
      {isHired ? (
        <>
          <span>{person.firstName} {person.lastName}</span>
          <button onClick={handleEditClick}>
            Edit
          </button>
        </>
      ) : (
        <Link to={`/view/${id}`} state={{ person }}>
          <h3>{person.firstName} {person.lastName}</h3>
        </Link>
      )}
      {showWage && person.wage && <p>Wage: £{person.wage}</p>}
    </li>
  )
}

export default PeopleListItem
