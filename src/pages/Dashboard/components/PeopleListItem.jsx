import { Link, useNavigate } from "react-router-dom"

function PeopleListItem({ personObj, index, showWage = false, isHired = false }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/view/${index}`);
  }

  return (
    <li>
      {isHired ? (
        <>
          <span>{personObj.firstName} {personObj.lastName}</span>
          <button 
            onClick={handleEditClick} 
          >
            Edit
          </button>
        </>
      ) : (
        <Link to={`/view/${index}`} state={{ personObj }}>
          <h3>
            {personObj.firstName} {personObj.lastName}
          </h3>
        </Link>
      )}
      {showWage && personObj.wage && <p>Wage: £{personObj.wage}</p>}
    </li>
  )
}

export default PeopleListItem
