import {useState} from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';



const App = () => {
  let heroData = [
    {text1: "Dive into", text2: "what youlove"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in ", text2: "to your passions"}
  ]

  const [heroCount,  setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
    <Background playStatus = {playStatus} heroCount = {heroCount} />
    <Navbar/>
    <Hero
    setPlayStatus = {setPlayStatus}
    heroData = {heroData}
    heroCount = {heroCount}
    setHeroCount = {setHeroCount}
    playStatus = {playStatus}
    />
    </div>
  )
}

export default App