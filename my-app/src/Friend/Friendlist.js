import React from 'react';
import Friend from './Friend';


class Friendlist extends React.Component {
    render () {
        return (<div className='Friendlist'>
            <Friend name="Ansh" />
            <Friend name="Xiao" />
            <Friend name="Wayne" />
        </div>);
    }
}


export default Friendlist;