import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            value: 'Busca lo que quieras'
        }
    }
    
    onChange(event) {
        this.setState ({
            value: event.target.value
        })
    }

    onFocus(event) {
        this.setState({
            value: ''
        })
    }

    render () {
        return (
            <div className="header">
                <Link to="/">
                    <h1>Logo</h1>
                </Link>

                <input type="text" 
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        onFocus={this.onFocus.bind(this)} />

                <hr />
            </div>
        )
    }
}

export default Header;