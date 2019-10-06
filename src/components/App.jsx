import React, { useState } from 'react'
// import Button from '../reusable/Button'
// import List from '../reusable/List'
const App = () => {
    const [resource, setResource] = useState('posts')
    // const handleClick = e => {
    //     const { name } = e.target;
    //     setResource(name);
    // }
    return (
        <div className='ui container'>
            <button className="ui button default" name="posts" onClick={(e) => setResource(e.target.name)} >
                posts
            </button>
            <button className="ui button default" name="todos" onClick={(e) => setResource(e.target.name)}>
                todos
            </button>
            {resource}

            {/* <List resource={resource} /> */}
        </div>
    );
}
export default App;