import React from 'react'

const Stack = (props) => {
    const { children, height, width, justifyContent, alignItems ,size} = props
    return (
        <div style={{
            height: height,
            width: width,
            justifyContent: justifyContent,
            alignItems: alignItems,
            flexDirection:'column'
        }}>
            {children.map(( child, index ) => {
                return <div>
                    {index != 0 && <div style={{height: size}} />}
                    {child}
                </div>
            })}
        </div>
    )
}

export default Stack;