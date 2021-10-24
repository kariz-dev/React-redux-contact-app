import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/edit">Edit</Link>
                    </li>
                    <li>
                        <Link to="/add">add</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav
