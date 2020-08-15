import React from 'react';
import Task from './Task';
import NewTaskModal from './NewTaskModal';

class Tasklist extends React.Component {
    
    getTasklist = (username) => {
        fetch('https://localhost:4567/tasklist', {
            method: 'post',
            body: username
        });
    }
    
    render() {
        return (<div className='Tasklist'>


            <NewTaskModal />
            <Task taskname="go to gym" description="fuck oof" />
            <Task taskname="go to gym" description="fuck oof" />
            <Task taskname="go to gym" description="fuck oof" />
            <Task taskname="go to gym" description="fuck oof" />
            <Task taskname="go to gym" description="fuck oof" />
        </div>);
    }
}
export default Tasklist;