'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => 
                sendBuildingNamesRequest()
            },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


async sendBuildingNamesRequest() {
    try {
        let response = await fetch(SERVER_URL());
        if (!response.ok) {
            alert("HTTP error while requesting building names!");
            return;
        }

        let parsed = await response.json();
        let longNames = [];
        let longToShortName = {};

        // Once the response is received, create the
        // new state variables and update the state.
        for (let key in parsed) {
            longToShortName[parsed[key]] = key;
            longNames.push(parsed[key]);
        }

        longNames.sort();
        this.setState({
            longToShortName: longToShortName,
            longNames: longNames
        });

    } catch (e) {
        console.log(e);
        alert("Error! Check console for more information.");
    }
};

const SERVER_URL = "http://localhost:5000/test"