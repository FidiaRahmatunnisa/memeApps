import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [meme,setMeme] = useState([])
  const [randomMeme,setrandomMeme] = useState([null])
  const [topText,setTopText] = useState(' ')
  const [bottomText,setBottomText] = useState(' ')

  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res=>res.json())
    .then((data)=>setMeme(data.data.memes))
  }, [])

  const getRandomMeme=()=>{
    const randomIndex = Math.floor(Math.random()*meme.length)
    // console.log(randomIndex)
    setrandomMeme(meme[randomIndex])
  }
  // console.log(randomMeme)

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-6'>
      <h1 className='text-3xl font-bold mb-4'>Meme Generator</h1>
      <div className='mb-5'>
        <input type="text" placeholder="Top Text" value={topText} className='border p-2 m-2'
        onChange={e=> setTopText(e.target.value)}
        />
        <input type="text" placeholder="Bottom Text" value={bottomText} className='border p-2 m-2'
        onChange={e=> setBottomText(e.target.value)}
        />
        <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={getRandomMeme}>Get Meme</button>
        {randomMeme && (
          <div className='relative'>
            <img src={randomMeme.url} alt="Meme" className='max-w-full h-auto rounded' />
            <h2 className='absolute top-2 left-1/2 transform-translate-x-1/2 text-white text-3xl font-bold drop-shadow ' >{topText}</h2>
            <h2 className='absolute bottom-2 left-1/2 transform-translate-x-1/2 text-white text-3xl font-bold drop-shadow ' >{bottomText}</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
