import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
	const [lat, setLat] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			position => setLat(position.coords.latitude),
			err => setErrorMessage(err.message)
		);
	}, []);
	// empty [] -> runs the component once in lifecycle of loading (prevents componentDidUpdate)

	let content;
	if (errorMessage) {
		content = <div>{errorMessage}</div>;
	} else if (lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Spinner message="Please allow location request." />;
	}

	return <div className="border red">{content}</div>;
};

/*
class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			lat: null,
			errorMessage: ''
		}	
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition( 
			position => this.setState({ lat: position.coords.latitude }), 
			err => this.setState({ errorMessage: err.message })
		);
	}

	renderContent(){
		if (this.state.errorMessage && !this.state.lat){
			return <div>Error: { this.state.errorMessage }</div>;
		}
		
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={ this.state.lat } />
		}

		else {
			return <Spinner message="Please allow location request." />;
		}
	}

	render(){
		return(
			<div className="main">
				{ this.renderContent() }
			</div>
		)
	}
	
};
*/

ReactDOM.render(<App />, document.getElementById('root'));
