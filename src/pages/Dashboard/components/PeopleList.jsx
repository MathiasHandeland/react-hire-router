import PeopleListItem from './PeopleListItem'

function PeopleList({ people, showWage = false, isHired = false }) {

  return (
    <ul>
      {people.map((personObj) => (
        <PeopleListItem key={personObj.index} personObj={personObj} index={personObj.index} showWage={showWage} isHired={isHired} />
      ))}
    </ul>
  )
}

export default PeopleList
