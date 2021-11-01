import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

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
                    <Button color="danger">
                        Click Me
                    </Button>
                </ul>
            </div>
        )
    }
}

export default Nav
