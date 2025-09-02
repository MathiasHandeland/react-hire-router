import { useState } from 'react'

function HireForm({ hirePerson, currentWage }) {
  const [wage, setWage] = useState(currentWage || '')

  function handleSubmit(event) {
    event.preventDefault()
    if (!wage) return alert("Please enter wage")
    hirePerson(wage)
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
        <button type="submit"> {currentWage ? "Edit Wage" : "Hire"}</button>
    </form>
  )
}

export default HireForm
