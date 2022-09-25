import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { getToken, removeToken } from '../redux/token/actions'
import { connect } from 'react-redux'

function Header(props) {
  const { pathname } = useLocation()

  return (
    <HeaderContainer>
      <Logo>cartoonify</Logo>

      <NavigationContianer>
        <StyledLink to="/" isactive={pathname === '/' ? 1 : 0}>
          <NavigationItem>서비스</NavigationItem>
        </StyledLink>

        {props.token.length ? (
          <StyledLink
            to="/mypage/order"
            isactive={pathname === '/mypage/order' ? 1 : 0}
          >
            <NavigationItem>마이페이지</NavigationItem>
          </StyledLink>
        ) : (
          <StyledLink to="/sign-up" isactive={pathname === '/sign-up' ? 1 : 0}>
            <NavigationItem>회원가입</NavigationItem>
          </StyledLink>
        )}

        {props.token.length ? (
          <NavigationItem onClick={() => props.removeToken()}>
            로그아웃
          </NavigationItem>
        ) : (
          <StyledLink to="/login" isactive={pathname === '/login' ? 1 : 0}>
            <NavigationItem>로그인</NavigationItem>
          </StyledLink>
        )}
      </NavigationContianer>
    </HeaderContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getToken: (token) => dispatch(getToken(token)),
    removeToken: () => dispatch(removeToken()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`
const Logo = styled.div`
  font-size: 32px;
`
const NavigationContianer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  width: 180px;
`
const NavigationItem = styled.div`
  height: 40px;
  line-height: 40px;
  width: 60px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => (props.isactive ? 'blue' : 'none')};
  color: ${(props) => (props.isactive ? 'white' : 'black')};
`
