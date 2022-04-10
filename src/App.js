import { useState, useEffect } from 'react'
import './App.css'
import Nav from '../src/Components/Nav'
import ArtworkImage from '../src/Components/ArtworkImage'
import ArtworkCataloging from '../src/Components/ArtworkCataloging'
import Modal from '../src/Components/Modal'

import getMetRecord from '../src/requests/metApi'
import getAicRecord from '../src/requests/aicApi'

const App = () => {
  const [api, setApi] = useState(null)
  const [museum, setMuseum] = useState('Met')
  const [modal, setModal] = useState(true)

  useEffect(() => {
    changeApi('Met')
  }, [])

  const changeApi = (museum) => {
    console.log('changeApi is running!')
    if (museum === 'Met') {
      setMuseum('Met')
      setApi(getMetRecord)
    } else if (museum === 'AIC') {
      setMuseum('AIC')
      setApi(getAicRecord)
    }
  }

  const displayModal = modal ? <Modal setModal={setModal} /> : ''

  return (
    <div>
      {displayModal}

      <div className='innerContainer'>
        <Nav museum={museum} changeApi={changeApi} />
        <div className='artworkContainer'>
          <ArtworkImage api={api} />
          <ArtworkCataloging api={api} museum={museum} changeApi={changeApi} />
        </div>
      </div>
    </div>
  )
}

export default App
