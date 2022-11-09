import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import VideoGames from './components/VideoGames'
import { useDispatch, useSelector } from 'react-redux'
import { GamesDataAction } from './components/store/GamesDataSlice'
import './App.css'


const App = () => {
  const dispatch = useDispatch()
  const hasData = useSelector(state => state.Data.AllData)

  async function getGamesData() {
    const resp = await fetch('https://public.connectnow.org.uk/applicant-test/')

    const data = await resp.json()
    dispatch(GamesDataAction.getGameData(data))
  }



  useEffect(() => {
    console.log('hello')
    getGamesData()
  }, [])


  return (
    <div>
      {hasData.length === 0 && <div className='wait'><h1>Please wait some time...</h1></div>}
      {hasData.length > 0 && <div>
        <Header />
        <VideoGames />

      </div>}
    </div>
  )
}

export default App