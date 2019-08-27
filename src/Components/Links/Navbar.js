import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><a href="/Course">Course</a></li>
                    <li><a href="/Profile">Profile</a></li>
                </ul>
            </div>
        )
    }
}
