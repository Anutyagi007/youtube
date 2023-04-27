import React, { useEffect, useState } from 'react'
import { Youtube_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard'

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
    <div className='flex flex-wrap'>
        
        {videos.map((video)=>(
            <VideoCard key={video.id} info={video}/>
        ))}
    </div>
  )
}

export default VideoContainer