import React from 'react';

class Feed extends React.Component {
    render() {
        return (<div className='Feed'>
            <div className="feed-line">{this.props.name}</div>
        </div>);
    }
}

export default Feed;