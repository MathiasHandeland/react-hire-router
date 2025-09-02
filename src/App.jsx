import { useState, useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import PersonProfile from './pages/PersonProfile'

export default function App() {
  const [data, setData] = useState([])
  const url = 'https://randomuser.me/api/?results=50';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        // initialize data with index and wage
        const initialData = json.results.map((person, index) => ({
          firstName: person.name.first,
          lastName: person.name.last,
          wage: null,
          index
        }))
        setData(initialData)
      } catch (error) {
        console.error('Failed to fetch people:', error)
      }
    }
    fetchData()
  }, [])


  function hirePerson(index, wage) {
    setData(prevData =>
      prevData.map(person =>
        person.index === index ? { ...person, wage } : person
      )
    )
  } 

  const hiredList = data.filter(p => p.wage)

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
            <Route path="/" element={<Dashboard hiredPeople={hiredList} people={data} />} />
            <Route path="/view/:id" element={<PersonProfile people={data} hirePerson={hirePerson} />} />
          </Routes>
        </main>
      </header>
    </>
  )
}
