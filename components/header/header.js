import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = { nombre: 'lucas'}
    }
    
    // onChange() {
    //     this.setState ({

    //     })
    // }
    render () {
        return (
            <div>
                <Link to="/">
                    <h1>Logo</h1>
                </Link>

                
                <input type="text" value={this.state.nombre} />

                <hr />
            </div>
        )
    }
}

// const Header = () => (
//     <div>
//     <Link to="/">
//         <h1>Logo</h1>
//     </Link>

//     <input type="text" value={this.state.nombre} />
//     </div>
// )

export default Header;