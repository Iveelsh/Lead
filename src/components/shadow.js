import React, { useState } from "react";

const Shadow = (props) => {

    const { children, shadowOpacity = 10, shadowColor = 'black', shadowOffsetHight = 0 , shadowOffsetWidth = 0, blur = 0} = props;

            return <div style={{
                boxShadow: `${shadowOffsetWidth} ${shadowOffsetHight} ${blur} ${shadowOpacity} ${shadowColor}`
            }}>
                {children}
            </div>
}  
export default Shadow;