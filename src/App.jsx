import { useState } from 'react'
import './App.css'
import { People } from './components/People';

function App() {

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Teacher Inés Oliveros",
      role: "Backend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar8.png"
    },
    {
      id: 2,
      name: "Andres Esteban",
      role: "QA",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
      id: 3,
      name: "Alejandra Paz",
      role: "Frontend Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    }
  ]);

  return (
    <div>
      <People
        people={people}
        setPeople={setPeople}
      />
    </div>
  )
}

export default App;
