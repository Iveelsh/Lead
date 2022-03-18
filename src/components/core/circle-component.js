import React from "react";

export const CircleComponent = (props) => {
    const { Children, lineWidth, size, lineType, justifyContent, alignItems ,backgroundColor,borderColor , color} = props


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: justifyContent,
                alignItems: alignItems,
                backgroundColor: backgroundColor,
                color: color,
                height: size,
                width: size,
                borderRadius: '50%' ,
                borderWidth: lineWidth,
                borderStyle: lineType,
                borderColor: borderColor,

            }}
        >
            {
                Children
            }
        </div>
    )
}