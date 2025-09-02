import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Routes, Route, Link } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [people, setPeople] = useState([]) // stores non-hired people
  const [hiredPeople, setHiredPeople] = useState([]) // stores hired people + wage
  const url = 'https://randomuser.me/api/?results=50';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        const randomPeople = data.results.map((person, id) => ({
          firstName: person.name.first,
          lastName: person.name.last,
          id,
          wage: 0
        }))
        setPeople(randomPeople)
      } catch (error) {
        console.error('Failed to fetch people:', error)
      }
    }
    fetchData()
  }, [])

  function hirePerson(id, wage) {
    // Check if the person is already hired
    const alreadyHired = hiredPeople.find(p => p.id === id)

    if (alreadyHired) {
      // Update wage
      setHiredPeople(prev =>
        prev.map(p =>
          p.id === id ? { ...p, wage } : p
        )
      )
    } else {
      // hire the person: remove from people and add to hiredPeople with given wage
      const personToHire = people.find(p => p.id === id)
      if (!personToHire) return
      setPeople(prev => prev.filter(p => p.id !== id))
      setHiredPeople(prev => [...prev, { ...personToHire, wage }])
    }
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1> 
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
          <Route path="/view/:id" element={<PersonProfile people={[...people, ...hiredPeople]} hirePerson={hirePerson} />} />
        </Routes>
      </main>
    </>
  )
}
