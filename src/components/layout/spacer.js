import * as React from 'react'

export const Spacer = ({size, hori}) => {
   return (
       <>
       <div style={{width: hori && size, height: !hori && size}}/> 
       </>
   )
}; 

export default Spacer; 
