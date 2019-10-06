import React from 'react'
const List = props => {
    const renderList = () => {
        return (
            <li>{props.resource}</li>
        );
    }
    return(
        <ul className="ui list">
           { renderList() }
        </ul>
    )

}
export default List;