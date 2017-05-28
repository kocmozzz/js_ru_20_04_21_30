import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticlesPage from '../route_handlers/ArticlesPage'
import CommentsPage from '../route_handlers/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters/index'
import Counter from './Counter'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <Router>
                <div>
                    <UserForm />
                    <ul>
                        <li><NavLink to = '/counter' activeStyle = {{color: 'red'}}>Counter</NavLink></li>
                        <li><NavLink to = '/filters' activeStyle = {{color: 'red'}}>Filters</NavLink></li>
                        <li><NavLink to = '/articles' activeStyle = {{color: 'red'}}>Articles</NavLink></li>
                        <li><NavLink to = '/comments/1' activeStyle = {{color: 'red'}}>Comments</NavLink></li>
                    </ul>

                    <Switch>
                        <Route path = '/counter' component = {Counter} exact />
                        <Route path = '/filters' component = {Filters}/>
                        <Route path = '/articles/new' render = {this.getNewArticleComponent}/>
                        <Route path = '/articles' component = {ArticlesPage}/>
                        <Route path = '/comments/:page' component = {CommentsPage}/>
                    </Switch>
                </div>
            </Router>
        )
    }

    getNewArticleComponent = () => {
        return <h2>New Article Component</h2>
    }

}

export default App
