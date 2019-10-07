import React from 'react'
const List = props => {
    console.log(props.resource)
    const renderList = () => {
        if (!props.resource) {
            return <div>Loading...</div>;
        }
        return props.resource && props.resource.map((el, i) => { return (<li key={i}>{el.title}</li>); })
    }
    return (
        <ul className="ui list">
            {renderList()}
        </ul>
    )

}
export default List;