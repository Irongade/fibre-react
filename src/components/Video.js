import React from 'react'

const Video = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
            <iframe 
                height="400" width="600"
                src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                frameborder='0'
                allow='autoplay; encrypted-media'
                allowfullscreen
                title='video'
            />
        </div>
    )
}

export default Video
