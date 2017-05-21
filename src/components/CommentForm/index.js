import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './style.css'
import { addComment } from '../../AC/index'

class CommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    state = {
        user: '',
        comment: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.comment}
                                onChange = {this.handleChange('comment')}
                                className = {this.getClassName('comment')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        console.log('---', this.state)

        if (this.state.user.length < 10) return;

        const comment = {
            articleId: this.props.articleId,
            user: this.state.user,
            text: this.state.comment
        }

        this.props.addComment(comment);

        this.setState({
            user: '',
            comment: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < 10 ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > 20) return
        this.setState({
            [type]: value
        })
    }
}

export default connect(null, { addComment })(CommentForm)
