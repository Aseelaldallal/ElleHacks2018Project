import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavComponent from './components/navbar/navbar.js';
class App extends React.Component {
	render() {
		return(
			<div>
				<NavComponent></NavComponent>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
