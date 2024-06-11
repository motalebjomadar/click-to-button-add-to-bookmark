
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/body/Bookmarks'
import Products from './components/body/Products'
import Header from './components/header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = product => {
    const newBookmark = [...bookmarks, product];
    setBookmarks(newBookmark);
  }

  return (
    <>
    <Header></Header>
      <h1 className='font-bold text-2xl'>Click to add or Remove icon with tailwind css</h1>
      <div className='flex justify-between max-w-6xl mx-auto '>
        <Products handleAddToBookmark={handleAddToBookmark}></Products>
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
