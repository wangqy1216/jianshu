import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';  
import store from './store'; 

import GlobalStyle from './style.js';
import Iconfont from './statics/iconfont/iconfont.js';

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Iconfont />
                <Provider store={store}>
                    <Header />
                </Provider>               
            </Fragment>
        )
    }
}

export default App;