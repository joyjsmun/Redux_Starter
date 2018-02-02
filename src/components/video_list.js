import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {   // VideoList receive props
    // const video = props.video;
    
   const videoItems =  props.videos.map((video) => {
        return <VideoListItem key = {video.etag} video={video} />
    });
    
    return (
        
        //props : contains video list
        <ul className ="col-md-4 list-group" >
            {videoItems}
            
            
        </ul>
    );
};


export default VideoList;