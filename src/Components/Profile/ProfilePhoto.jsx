import React from 'react'
import Img from '../../profilepic.png'

function ProfilePhoto() {
  return (
    <div className='ppp'>
        <img src={Img} alt='profileImage' height = {200} width={200} />
    </div>
  )
}

export default ProfilePhoto