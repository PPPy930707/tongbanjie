import React from 'react'
import {render} from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import configureStore from './redux/store'
import { Provider } from 'react-redux'

const store = configureStore();

const renderApp = (Component) => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};

renderApp(App);

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./App', () => {
        renderApp(App);
    });
}