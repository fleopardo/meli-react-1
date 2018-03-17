import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const query = this.props.match.params.query;
        alert("Ey, estás buscando '" + query + "' ,ahora deberías llamar a la API y traerte los resultados de la query");
        // TODO: Pegarle a la API desde acá. Leer Axios.
        const result = [
            {
                name: query + "1",
            },
            {
                name: query + "2",
            },
            {
                name: query + "3",
            }
        ];
        this.setState({
            result,
        })
    }
    render() {
        if (!this.state.result) return null;

        const items = this.state.result.map((item, index) =>
            <div key={index}>
                <h1>{item.name}</h1>
            </div>
        );
        return <div>{items}</div>;
    }
}

export default Search;