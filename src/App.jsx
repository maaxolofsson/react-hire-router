import './App.css'
import Dashboard from './pages/Dashboard'
import { useState, useEffect } from 'react'
import PersonProfile from './pages/PersonProfile'
import UpdateForm from './pages/UpdatePersonProfile/components/UpdateForm'
import { randomUserApi } from '../API'
import { Routes, Route, useNavigate } from 'react-router-dom'

export default function App() {
  const [people, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])
  const navigate = useNavigate()

  const hirePerson = person => e => {
    const personToHire = people.find(p => p.index === person.index)
    hiredPeople.push(personToHire)
    setHiredPeople(hiredPeople)
    navigate('/')
  }

  const updateHiredPerson = person => {
    if (!person.hired) return;
    const updatedHiredPeople = hiredPeople.map(p => p.index === person.index ? person : p)
    setHiredPeople(updatedHiredPeople)
    navigate('/')
  }

  useEffect(
    () =>
      async function () {
        const res = await fetch(randomUserApi + "/?results=50");
        const data = await res.json();
        data.results.forEach((d, ix) => {
          d.index = ix
          d.wage = "Not employed."
          d.hired = false
        })
        setPeople(data.results);
      },
    []
  );

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard people={people} hiredPeople={hiredPeople} />}></Route>
        <Route path='/view/:id' element={<PersonProfile people={people} hire={hirePerson} />}></Route>
        <Route path='/edit/:id' element={<UpdateForm people={people} update={updateHiredPerson} />}></Route>
      </Routes>
    </>
  )
}
