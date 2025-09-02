import { useState } from 'react'

function HireForm({ person, hirePerson, currentWage }) {
  const [wage, setWage] = useState()

  function handleSubmit(event) {
    event.preventDefault()
    if (!wage) return alert("Please enter wage")
    hirePerson(person, wage)
  }

  function handleEdit(event) {
    event.preventDefault()
    if (!wage) return alert("Cannot edit wage: person not hired")
    hirePerson(person, wage)
  }

  function handleHire(event) {
    event.preventDefault()
    if (!wage) return alert("Cannot hire: please enter wage")
    hirePerson(person, wage)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
        <button type="button" onClick={handleEdit}> {currentWage ? "Edit Wage" : "Hire"}</button>
    </form>
  )
}

export default HireForm
