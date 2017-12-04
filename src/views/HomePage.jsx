/**
 * 首页
 */
import React from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'
import { matchPath ,withRouter } from 'react-router'
import { Spin } from 'antd'

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>hello!</div>
        )
    }
}
export default withRouter(HomePage)
