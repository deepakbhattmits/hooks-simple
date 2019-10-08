import React from 'react'
const List = props => {
    console.log(props.resource)
    const renderList = () => {
        if (!props.list) {
            return <div>Loading...</div>;
        }
        return props.list && props.list.map((el, i) => { return (<li key={i}>{el.title || el.name}</li>); })
    }
    return (
        <ul className="ui list">
            {renderList()}
        </ul>
    )

}
export default List;