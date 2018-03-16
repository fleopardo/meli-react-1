import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // TODO: Pegarle a la API desde acá. Leer Axios.
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
        console.log(this.props.match.query);
        if (!this.state.result) return null;

        const items = this.state.result.map((item) =>
            <div>
                <h1>{item.name}</h1>
            </div>
        );
        return <div>{items}</div>;
    }
}

export default Search;