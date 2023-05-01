import React, { useEffect, useState } from 'react'
import { Youtube_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    const getVideos= async ()=>{
        const data=await fetch(Youtube_VIDEO_API)    
        const json=await data.json()
        setVideos(json.items)
    }
    useEffect(()=>{
        getVideos()
    },[])
  return (
    <div className='flex flex-wrap justify-center'>
        
        {videos.map((video)=>(
            <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video}/></Link>
        ))}
    </div>
  )
}

export default VideoContainer