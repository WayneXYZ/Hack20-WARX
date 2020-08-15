import React from 'react';
import Timeline from './Timeline/timeline';
import Tasklist from './Task/Tasklist';
import Friendlist from './Friend/Friendlist';



class App extends React.Component {

  componentDidMount() {

    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data });
      })

  }

  state = {
    data: []
  }




  render() {
    // console.log(JSON.stringify(this.state.data))
    // for (var i = 0; i < this.state.data.length; i++) {
    //   var obj = this.state.data[i];
    //   console.log(obj.id);
    // }

    var timeobj = this.state.data;
    // var taskobj = this.state.data.tasks;
    // var friendobj = this.state.data.friends;

    return (
      <div className="App">
        <div className="navbar">
          <div className="brand">
            <h1 className="nav-title">Checkin</h1>
            <h2 className="nav-subtitle">Be productive with your friends like together</h2>
          </div>
          <div className="right-menu">

          </div>
        </div>
        <section class="mainContent">
          <div class="col col-timeline">
            <h3 className="section-name">feed</h3>
            {timeobj.map((obj, i) => <Timeline data={obj} />)}
          </div>
          <div class="col col-task">
            <h3 className="section-name">your task</h3>
            {/* There should be a button called "new task" */}
            <Tasklist />
          </div>
          <div class="col col-friends">
            <h3 className="section-name">friends</h3>
            <Friendlist />
          </div>
        </section>
      </div>
      // <div className="App">
      //   <h1>WARX</h1>
      //   {timeobj.map((obj, i) => <Timeline data={obj} />)}
      //   <Friendlist />
      //   <Tasklist />

      // </div>
    );
  }

}


export default App;
