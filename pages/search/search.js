import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
       // Pegale a la API.
       const result = [
           {
             name: "nombre1",
           }, 
           {
                name: "nombre2",
            }, 
            {
                name: "nombre3",
            }
        ];
        this.setState({
            result,
        })
    }
    render() {
        if (this.state.result) {
            const items = this.state.result.map((item) => 
                <div>
                     <h1>{item.name}</h1>
                </div>
            );
        }
        return null;      
       
    }
} 


export default Search;