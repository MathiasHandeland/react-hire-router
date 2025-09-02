import PeopleListItem from './PeopleListItem'

function PeopleList({ people, showWage = false, isHired = false }) {

  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.index} person={person} index={person.index} showWage={showWage} isHired={isHired} />
      ))}
    </ul>
  )
}

export default PeopleList
