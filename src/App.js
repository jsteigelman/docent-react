import { useState } from 'react'
import './App.css'
import Nav from '../src/Components/Nav'
import ArtworkImage from '../src/Components/ArtworkImage'
import ArtworkCataloging from '../src/Components/ArtworkCataloging'
import getMetRecord from '../src/requests/metApi'

function App() {
  const [api, setApi] = useState(getMetRecord)


  return (
    <div>
      <div className='innerContainer'>
        <Nav setApi={setApi} />
        <div className='artworkContainer'>
        <ArtworkImage api={api} />
        <ArtworkCataloging api={api} />
        </div>
      </div>
    </div>
  )
}

export default App
