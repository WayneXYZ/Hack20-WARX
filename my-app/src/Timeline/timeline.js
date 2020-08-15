import React from 'react';
import Feed from './feed.js';


class Timeline extends React.Component {
    render() {
        return (<div className='Timeline'>

            <Feed name="feed1" />
            <Feed name="feed1" />
        </div>);
    }
}

export default Timeline;