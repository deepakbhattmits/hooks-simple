import React, { useState } from 'react'
import Button from '../reusable/Button'
import ResourceList from './ResourceList'
const App = () => {
    const [resource, setResource] = useState('posts')
    const handleClick = e => {
        const { name } = e.target;
        setResource(name);
    }
    return (
        <div className='ui container grid'>
            <div className="row">
                <h2 className='ui header'>HELLO</h2>
            </div>
            <div className="row">
                <Button className="ui button pink" name="posts" onClick={handleClick} >
                    posts
                </Button>
                <Button className="ui button blue " name="todos" onClick={handleClick}>
                    todos
                </Button>
            </div>
            <div className="row">
                <ResourceList resource={resource} />
            </div>
        </div>

    );
}
export default App;