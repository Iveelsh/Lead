import React, { useState } from "react";

const Shadow = (props) => {

    const { children, shadowOpacity, shadowColor, shadowOffsetHight, shadowOffsetWidth, blur} = props;

            return <div style={{
                boxShadow: `${shadowOffsetWidth} ${shadowOffsetHight} ${blur} ${shadowOpacity} ${shadowColor}`
            }}>
                {children}
            </div>
}  
export default Shadow;
