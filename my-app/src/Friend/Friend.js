import React from 'react';


class Friend extends React.Component {

    checkin = (checkinMap) => {
        fetch('https://localhost:4567/checkin', {
            method: 'post',
            body: JSON.stringify(checkinMap)
        });
    }

    render() {

        var checkinMap = { 'username': this.props.name, 'friendname': this.props.name };
        return (<div className='Friend'>
            <div>Friend's name: {this.props.name}</div>
            <div>Status</div>
            <button onClick={this.checkin.bind(checkinMap)}>
                CHECK IN
            </button>
        </div>);
    }
}


export default Friend;