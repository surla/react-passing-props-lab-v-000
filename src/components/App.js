import React, { Component} from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
    constructor() {
        super();
        
        this.state ={
            fruit: [],
            filters: [],
            currentFilter: null,
        }
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchFruit();
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
            .then(response => response.json())
            .then(filters => this.setState({ filters }));
    }

    fetchFruit = () => {
        fetch('/api/fruit')
            .then(response => response.json())
            .then(fruit => this.setState({ fruit }));
    }

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }


    render() {
        return (
            <FruitBasket 
                handleChange={this.handleFilterChange}
                currentFilter={this.state.currentFilter}
                filters={this.state.filters}
                fruit={this.state.fruit}
            />
        )
    }
}

export default App;
