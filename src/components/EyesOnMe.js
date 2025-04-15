// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {
    function focusing(){
        console.log('Good!')
    }
    function blurred(){
        console.log('Hey! Eyes on me!')
    }
  return (
    <div>
      <button
      onFocus={focusing}
      onBlur={blurred}
      >Eyes on me</button>
    </div>
  )
}

export default EyesOnMe
