import { useState } from 'react'
import './App.css'
import Nav from '../src/Components/Nav'
import ArtworkImage from '../src/Components/ArtworkImage'
import ArtworkCataloging from '../src/Components/ArtworkCataloging'
import getMetRecord from '../src/requests/metApi'
import getAicRecord from '../src/requests/aicApi'

function App() {
  const [api, setApi] = useState(() => getMetRecord)
  
  const changeApi = (museum) => {
    console.log('changeApi is running!')
    if (museum === 'Met') {
      setApi(() => getMetRecord)
    } else if (museum === 'AIC') {
      setApi(() => getAicRecord)
    }

    return api
  }

  return (
    <div>
      <div className='innerContainer'>
        <Nav setApi={setApi} changeApi={changeApi} />
        <div className='artworkContainer'>
        <ArtworkImage api={api} />
        <ArtworkCataloging api={api} />
        </div>
      </div>
    </div>
  )
}

export default App
