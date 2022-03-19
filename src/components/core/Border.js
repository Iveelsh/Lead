export const Border = (props) => {
    const { lineWidth, radius, topWidth, bottomWidth, leftWidth, rightWidth, children, lineType, color } = props;

    console.log(props)

    return <div>
        <div style={{
            borderRight: rightWidth,
            borderRightColor: color,
            borderLeft: leftWidth,
            borderLeftColor: color,
            borderTop: topWidth,
            borderTopColor: color,
            borderBottom: bottomWidth,
            borderBottomColor: color,
            borderStyle: lineType,
            borderRadius: radius,
            color: color,
            borderWidth: lineWidth,
        }}>
            {children}
        </div>
    </div>
}