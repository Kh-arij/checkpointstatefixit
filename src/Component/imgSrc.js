import React from 'react'
import photo from './09aea00fc018749c1c255ddfd594b218.jpeg'

const ProfilePhoto=(props)=> {
    return (
        <div>
            <img src={photo} alt="picture" style ={{borderRadius: "100%", width: "400px", height: "400px"}} />
        </div>
    )
}

export default ProfilePhoto