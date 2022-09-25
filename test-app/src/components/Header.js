import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, isActive, useLocation } from 'react-router-dom'
import { getToken, removeToken } from '../redux/token/actions'
import { connect } from 'react-redux'

function Header(props) {
  const [count, setCount] = useState(0)
  const { pathname } = useLocation()

  return (
    <HeaderContainer>
      <Logo>로고</Logo>

      <NavigationContianer>
        <StyledLink to="/" isActive={pathname === '/'}>
          <NavigationItem>서비스</NavigationItem>
        </StyledLink>

        {props.token.length ? (
          <StyledLink
            to="/mypage/order"
            isActive={pathname === '/mypage/order'}
          >
            <NavigationItem>마이페이지</NavigationItem>
          </StyledLink>
        ) : (
          <StyledLink to="/sign-up" isActive={pathname === '/sign-up'}>
            <NavigationItem>회원가입</NavigationItem>
          </StyledLink>
        )}

        {props.token.length ? (
          <NavigationItem onClick={() => props.removeToken()}>
            로그아웃
          </NavigationItem>
        ) : (
          <StyledLink to="/login" isActive={pathname === '/login'}>
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
  background-color: ${(props) => (props.isActive ? 'blue' : 'none')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
`
