import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserHistory, BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';  
import Home from './pages/home';
import Detail from './pages/detail';

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
                <div>
                    <Header />
                    <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}></Route>
                         <Route path='/detail ' exact component={Detail}></Route>
                    </div>           
                    </BrowserRouter>
                </div>
                </Provider>               
            </Fragment>
        )
    }
}

export default App;