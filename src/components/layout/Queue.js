import React from 'react'

const Queue = (props) => {
    const { children, width, justifyContent, alignItems } = props
    return (
        <div style={{
            width: width,
            justifyContent: justifyContent,
            flexDirection:'row',
            alignItems: alignItems,
        }}>
            {children.map(( child, index ) => {
                return <div>
                    {index != 0 && <div style={{width: size}} />}
                    {child}
                </div>
            })}
        </div>
    )
}
export default Queue;