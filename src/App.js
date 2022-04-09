import { useState, useEffect } from 'react'
import './App.css'
import Nav from '../src/Components/Nav'
import ArtworkImage from '../src/Components/ArtworkImage'
import ArtworkCataloging from '../src/Components/ArtworkCataloging'
import getMetRecord from '../src/requests/metApi'
import getAicRecord from '../src/requests/aicApi'

const App = () => {
  const [api, setApi] = useState(null)

  useEffect(() => {
    changeApi('Met')
  }, [])

  const changeApi = (museum) => {
    console.log('changeApi is running!')
    if (museum === 'Met') {
      return setApi(getMetRecord)
    } else if (museum === 'AIC') {
      setApi(getAicRecord)
    }
  }

  return (
    <div>
      <div className='innerContainer'>
        <Nav setApi={setApi} changeApi={changeApi} />
        <div className='artworkContainer'>
        <ArtworkImage api={api} />
        <ArtworkCataloging setApi={setApi} api={api} changeApi={changeApi} />
        </div>
      </div>
    </div>
  )
}

export default App
