import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

export default class Pagination extends Component {
    static propTypes = {
        page: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired,
        baseUrl: PropTypes.string.isRequired
    }

    render() {
        const {page, total, limit, baseUrl} = this.props;

        const pageNum = Math.floor(total / limit) + (!!total % limit ? 1 : 0);
        const pages = [];

        for (let i = 0; i < pageNum; i++) {
            pages[i] = baseUrl + (i + 1);
        }

        return (
            <ul>
                {pages.map((link, i) => {
                    return <li key={link}>
                        <NavLink to={link} activeStyle = {{color: 'red'}}>{i + 1}</NavLink>
                    </li>
                })}
            </ul>
        )
    }
}
