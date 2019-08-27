import React, { Component } from 'react'
import './Component.css';

function createCourse(name, holes) {
        localStorage.setItem("Course Name", name);
        localStorage.setItem("Number of holes", holes);
}

export default class Course extends Component {
    render() {
        return (
            <div>
                <p>This is the course</p>
                <button>New Course</button>
            </div>
        )
    }
}
