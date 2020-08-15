import React from 'react';


class Task extends React.Component {

    completeTask = (taskInfo) => {
        fetch('https://localhost:4567/complete', {
            method: 'post',
            body: JSON.stringify(taskInfo)
        });
    }

    render() {

        var taskInfo = { 'taskname': this.props.taskname, 'description': this.props.description }

        return (<div className='Task'>
            <div className="task-name">{this.props.name}</div>
            <div className="shared-friend">
                <div className="friend-share-text">friends shared:</div>
                <div className="friend-shared-list">Placeholder</div>
            </div>
            <button onClick={this.completeTask.bind(taskInfo)}>
                COMPLETE
            </button>
        </div>);
    }
}


export default Task;