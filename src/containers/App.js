import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


// const state = {
// 	robots: robots,
// 	searchfield: ''
// }

class App extends Component {

	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {

		this.setState({ searchfield: event.target.value })
		
	}

	render() {

		const { robots, searchfield } = this.state;

		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ? 

				<p className="pa5 ma6 tc red"> Loading ... </p> :
		

		(
			<div className="tc">
				<h1 className="f1 lh-title "> RoboFriends </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots= {filterRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);

		
	}
	
}

export default App;