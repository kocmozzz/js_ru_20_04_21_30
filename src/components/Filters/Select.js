import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {selectArticles} from '../../AC/index'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array,
        onSelection: PropTypes.func.isRequired
    };

    defaultProps = {
        selection: []
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select options = {options} value = {this.props.selection}
                    onChange = {this.handleSelectionChange}
                    multi = {true} />
        )
    }

    handleSelectionChange = selection => {
        const { selectArticles, onSelection } = this.props
        selectArticles(selection)
        onSelection(selection)
    }
}

export default connect(({selection: {articles, selection}}) => ({articles, selection}), { selectArticles })(SelectFilter)
