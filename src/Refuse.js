import React from 'react'

export default function Refuse() {
  return ( <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'absolute', 
    background: 'rgba(0, 0, 0, 0.5)', // Opacité de 50%
    width: '100vw', 
    height: '100vh'
  }}>
      <div style={{color:'Red', backgroundColor:'white'}}>
      <h1 > Phone number is incorrect</h1>
    </div>
    </div>
  )
}