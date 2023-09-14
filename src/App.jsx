import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, seReadingTime] = useState(0);
  const handleBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog]
          setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    seReadingTime(newReadingTime);
  }
  return (
    <>
    <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
     <Blogs
     handleBookmark={handleBookmark}
     handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks
     readingTime= {readingTime}
     bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
