import React from "react"

export default function Center({ children, wth }) {
  return (
    <div style={{ margin: `0 auto`, width: wth, padding: `0 1rem`, background: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {children}
    </div>
  )
}