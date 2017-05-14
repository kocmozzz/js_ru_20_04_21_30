import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Chart extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    componentDidMount() {
        console.log('---', 'mounting chart')
    }

    render() {
        return <div ref = {this.setContainerRef} />
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', 'updating chart')
        //perform some chart update
    }

    setContainerRef = ref => {
        this.container = ref
        if (!ref) {
            //do some cleanup
        }
        //do some charting with d3 or else
    }
}

export default Chart