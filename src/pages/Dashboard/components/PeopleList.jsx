import PeopleListItem from './PeopleListItem'

function PeopleList({ people, showWage = false, isHired = false }) {

  return (
    <ul>
      {people.map((person) => (
        <PeopleListItem key={person.id} person={person} id={person.id} showWage={showWage} isHired={isHired} />
      ))}
    </ul>
  )
}

export default PeopleList
