import React from 'react'
import { useSelector } from 'react-redux'
export default function Home() {

  const userLogin = useSelector(state => state.UserLoginJiraReducer.userLogin)
  return (
    <div>Home
      {userLogin?.name}
    </div>
  )
}
