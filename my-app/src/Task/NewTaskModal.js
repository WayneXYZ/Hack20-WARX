import React from 'react';
import Popup from 'reactjs-popup';

class NewTaskModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = { username: "", frequency: 1, category: "gym", description: "", group: ""};
    }
    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }


    categoryHandler = (event) => {
        this.setState({ category: event.target.value });
    }
    frequencyHandler = (event) => {
        this.setState({ frequency: event.target.value });
    }
    descriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    groupsHandler = (event) => {
        this.setState({ group: event.target.value });
    }


    handleSubmit = (event) => {
        alert('Your favorite flavor is: ' + this.state.category + " " + this.state.frequency + " " + this.state.group + " " + this.state.description);
        var data = {username : "username1", 
            category: this.state.category, 
            description: this.state.description, 
            frequency: this.state.frequency,
            group: this.state.group
        }
        this.createNewTask(data);
        event.preventDefault();
    }

    createNewTask = (data) => {
        fetch('https://localhost:4567/newTesk', {
            method: 'post',
            body: JSON.stringify(data)
        });
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.openModal}>
                    Controlled Popup
                </button>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div className="modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                        </a>
                        <form onSubmit={this.handleSubmit}>
                            Creat your task:
                            <label>
                                Category
                                <select value={this.state.category} onChange={this.categoryHandler}>
                                    <option value="Gym">Gym</option>
                                    <option value="Study">Study</option>
                                    <option value="Anime">Anime</option>
                                </select>
                            </label>
                            <label>
                                Description:
                                <input type="text" onChange={this.descriptionHandler}></input>
                            </label>
                            <label>
                                Frequency:
                                <select value={this.state.frequency} onChange={this.frequencyHandler}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>

                                </select>
                            </label>
                            <label>
                                Groups:
                                <input type="text" onChange={this.groupsHandler}></input>
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </Popup>
            </div>
        );
    }
}

export default NewTaskModal;