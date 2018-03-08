import React, { Component } from 'react';
const style = {
	heading :{
		textAlign: 'center',
    color: '#ec9090'
	}
}

class Dashboard extends Component {


  render() {
    return (
        <h1 style={style.heading}> Welcome to Gis Connect</h1>
    );
  }
}

export default Dashboard;
