import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {filterArticlesById, filterArticlesByDateRange} from '../../AC/index'

class Filters extends Component {
    render() {
        const { filterArticlesById, filterArticlesByDateRange } = this.props

        return (
            <div>
                <SelectFilter onSelection={filterArticlesById} />
                <DateRange onSelectRange={filterArticlesByDateRange} />
            </div>
        )
    }
}

export default connect(null, {filterArticlesById, filterArticlesByDateRange})(Filters)
