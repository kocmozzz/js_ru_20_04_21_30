import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../AC'
import { articlesListSelector } from '../../selectors'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select options={options} value={selected} multi={true} onChange={this.handleChange} />
    }
}

function createMapStateToProps(state, ownProps) {
    return {
        articles: articlesListSelector(state, ownProps),
        selected: state.filters.selected
    }
}

export default connect(createMapStateToProps, { changeSelection })(SelectFilter)
