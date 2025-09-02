import { useState, useEffect } from 'react'

function HireForm({ hirePerson, currentWage }) {
  const [wage, setWage] = useState(currentWage || '')

  useEffect(() => {
    setWage(currentWage || '')
  }, [currentWage])

  function handleSubmit(event) {
    event.preventDefault()

    const numericWage = Number(wage)
    if (!wage || numericWage <= 0) {
      return alert("Please enter a wage greater than 0")
    }

    hirePerson(numericWage) 
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
