import React from 'react'
import UserProfile from '../components/user/UserProfile'
import DATA from "../data/dummy.json"
function Profile() {
    const userDetails = DATA.meta.user
  return (
    <div>
        <UserProfile user={userDetails}/>
    </div>
  )
}

export default Profile