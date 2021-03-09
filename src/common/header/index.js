import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href='/' />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                    </NavItem>   
                    <SearchWrapper>
                        <NavSearch />
                        <span className="iconfont">&#xe633;</span>
                    </SearchWrapper>          
                    
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <span class="iconfont">&#xe708;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>      
                </Addition>
            </HeaderWrapper>
        ) 
    }
}

export default Header;