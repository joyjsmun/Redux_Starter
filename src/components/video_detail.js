import React from 'react';

const VideoDetail = ({video}) =>{
    //problem.. 
    // ** react always wants to like render instantly want to do it right away(doesn't want to wait!!!!)
    //some parents obj can't fatch information fast enough to satisfy the needs of child obj
    //** solve problem : add a check inside("if statement")
    //check if video is not provided, return... 
    if(!video){
        return <div>Loading.... </div>;
    }
    
    
    
    
    // if the video is ready then,this bottom statment will work instead of top if statement
    //** becaful for character "camel case"
    const videoId = video.id.videoId ; 
    // const videoId = video.id.videoId;
    //**** single quotes ( ' ' ) or backticks ( ` ` )? Backticks are required for template strings.
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    
    return(
        
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
        
        );
};


export default VideoDetail;