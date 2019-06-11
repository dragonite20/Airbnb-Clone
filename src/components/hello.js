import React, { Component } from 'react'

export default class hello extends Component {
    render() {
        return (
            <div>
                Hello {this.props.firstname} {this.props.lastname}
            </div>
        )
    }
}
