import React from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'
import { matchPath ,withRouter } from 'react-router'
import {showTip,hiddenTip} from './redux/actions/tip'
import { connect } from 'react-redux'
import './assets/index'
import HomePage from './views/HomePage'
import { Modal,Button,Layout } from 'antd'
import envConfig from '../config'

class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Router basename={envConfig.dev.rootPath}>
                <HomePage {...this.props} {...this.state}/>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    tipVisible: state.tip.visible,
    tipContent : state.tip.content
})

const mapDispatchToProps = (dispatch) => {
    return {
        showTip: (content) => {
            dispatch(showTip(content))
        },
        hiddenTip: () => {
            dispatch(hiddenTip())
        }
    }
}

const ConnectApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default ConnectApp
