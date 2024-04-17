import React from 'react'
import Navbar from '../Components/Navbar'
import './profile.css'

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <div className="photo borderRadius">
          photo
        </div>
        <div className="about borderRadius">

        </div>
        <div className="contact borderRadius">

        </div>
        <div className="misc borderRadius">

        </div>
      </div>
    </>
  )
}

export default Profile