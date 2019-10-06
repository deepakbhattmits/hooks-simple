import React, { useState } from 'react'
import Button from '../reusable/Button'
import List from '../reusable/List'
const App = () => {
    const [resource, setResource] = useState('posts')
    const handleClick = e => {
        const { name } = e.target;
        setResource(name);
    }
    return (
        <div className='ui container'>
            <div class="ui grid">

                <div className="eighteen wide column">
                    <h2 className='ui header'>HELLO</h2>
                </div>
                <div className="two wide column">
                    <Button className="ui button default" name="posts" onClick={handleClick} >
                        posts
                    </Button>
                </div>
                <div className="two wide column">
                    <Button className="ui button default" name="todos" onClick={handleClick}>
                        todos
                    </Button>
                </div>
                <div className="fourteen wide column">
                    <List resource={resource} />
                </div>
            </div>



        </div>
    );
}
export default App;