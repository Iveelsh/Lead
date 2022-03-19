import React from "react";
export const Text = () => {
    const { Color, transform, numberOfLines, width, type, underline, children } = props;
    return (
        <div
            style={{
                display: 'flex',
                width: width,
                Color: Color,
                transform: transform,
                numberOfLines: numberOfLines,
                type: type,
                underline: underline,
            }}
            blabla
        >
            {children}
        </div>
    )
}