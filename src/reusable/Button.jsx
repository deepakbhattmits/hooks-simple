import React from 'react'

const Button = props => {
    return <button 
                className={props.className}
                onClick={props.onClick}
                name={props.name}
            >
                {props.children.toUpperCase()}
            </button>
}
export default Button;