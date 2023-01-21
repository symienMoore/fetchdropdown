import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DropDown from './components/DropDown'

function App() {
const [data, setData] = useState<any>()

const getInfo = () => {
   fetch("https://swapi.py4e.com/api/people")
    .then((Response) => Response.json())
    .then((data) => {
      setData(data.results)})
}

useEffect(() => {
    getInfo()
}, [])

  return (
    <div className="App">
     <div>
       <h1>Star Wars</h1>
       <DropDown info={data}/>
     </div>
    </div>
  )
}

export default App
