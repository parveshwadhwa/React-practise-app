import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "red"}}>Home</NavLink></li>
                        <li><NavLink exact to="/about" activeStyle={{fontWeight: "bold", color: "red"}}>About</NavLink></li>
                        <li><NavLink exact to="/contact" activeStyle={{fontWeight: "bold", color: "red"}}>Contact</NavLink></li>
                        <li><NavLink exact to="/post/mobile" activeStyle={{fontWeight: "bold", color: "red"}}>Post</NavLink></li>
                        <li><NavLink exact to="/dashboard" activeStyle={{fontWeight: "bold", color: "red"}}>Dashboard</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
