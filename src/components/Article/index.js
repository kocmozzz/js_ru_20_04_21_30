import React, {Component} from 'react'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC/index'
import {articleSelectorFactory} from '../../selectors'

class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    static propTypes = {
        id: PropTypes.string.isRequired
        // article: PropTypes.shape({
        //     title: PropTypes.string.isRequired,
        //     text: PropTypes.string,
        //     comments: PropTypes.array
        // }).isRequired
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
        // FIXME это условие не срабатывает, т к где-то ссылка на объект возвращается,
        // а не новый объект
        // return nextProps.isOpen != this.props.isOpen
        //     || nextProps.article.comments.length != this.props.article.comments.length;
    }

    componentWillUpdate() {
        console.log('---', 'updating')
    }

    render() {
        const {id, toggleOpen, article} = this.props
        return (
            <section>
                <h2 onClick={toggleOpen}>
                    {article.title}
                    <a href = "#" onClick = {this.handleDelete}>delete me</a>
                </h2>
                <CSSTransitionGroup
                    transitionName = "article"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                {this.props.article.text}
                <CommentList articleId={this.props.article.id} comments={this.props.article.comments}/>
            </div>
        )
    }
}

function createMapStateToProps() {
    const articleSelector = articleSelectorFactory();

    return function mapStateToProps(state, ownProps) {
        return {
            article: articleSelector(state, ownProps)
        }
    }
}

export default connect(createMapStateToProps, { deleteArticle })(Article)
