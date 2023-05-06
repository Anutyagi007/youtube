import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 w-48 shadow-lg '>
        <Link to="/"><h1>Home</h1></Link>
        <h1>Shorts</h1>
        <h1>Subscriptions</h1>
        <h1>Library</h1>
        <h1>History</h1>
        <h1>Your Videos</h1>
        <h1>Watch Later</h1>
        <h1>Liked Videos</h1>

        <h1 className='font-bold mt-5'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies & shows</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fashion & Beauty</li>
        </ul>
    </div>
  )
}

export default Sidebar