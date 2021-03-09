import React, { Component, Fragment } from 'react';
import Header from './common/header';   

import GlobalStyle from './style.js';
import Incofont from './statics/iconfont/iconfont.js';

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <Incofont /> 
                <Header />
            </Fragment>
        )
    }
}

export default App;