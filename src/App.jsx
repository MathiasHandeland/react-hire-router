import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])
  const url = 'https://randomuser.me/api/?results=50';

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setPeople(data.results)
      } catch (error) {
        console.error('Failed to fetch people:', error)
      }
    }
    fetchData()
  }, [])

  function hirePerson(person, wage) {
    setHiredPeople(prev => {
      // If person is already hired, update wage
      if (prev.some(p => p.id === person.id)) {
        return prev.map(p =>
          p.id === person.id ? { ...p, wage } : p
        )
      }
      // Otherwise, add to hiredPeople
      return [...prev, { ...person, wage }]
    })
  }

  return (
    <>
        <header>
          <h1>Hire Your Team</h1> 
          <nav>
            <div>
              <ul>
                <li><Link to="/">Dashboard</Link></li>
              </ul>
            </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard hiredPeople={hiredPeople} people={people} />} />
            <Route path="/view/:id" element={<PersonProfile people={people} hirePerson={hirePerson} hiredPeople={hiredPeople} />} />
          </Routes>
        </main>
      </header>
    </>
  )
}
