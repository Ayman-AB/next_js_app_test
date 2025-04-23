import React from 'react'

const showProfile = (props) => {
    console.log("Props : ", props);
  return (
    <div>showProfile : {props.params.profileId}</div>
  )
}

export default showProfile