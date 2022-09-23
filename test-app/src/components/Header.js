import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, isActive, useLocation } from 'react-router-dom'

export default function Header() {
  const [count, setCount] = useState(0)
  const { pathname } = useLocation()

  return (
    <HeaderContainer>
      <Logo>로고</Logo>
      <NavigationContianer>
        <StyledLink to="/" isActive={pathname === '/'}>
          <NavigationItem>서비스</NavigationItem>
        </StyledLink>
        <StyledLink to="/sign-up" isActive={pathname === '/sign-up'}>
          {' '}
          <NavigationItem>회원가입</NavigationItem>
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          {' '}
          <NavigationItem>로그인</NavigationItem>
        </StyledLink>
      </NavigationContianer>
    </HeaderContainer>
  )
}

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
  font-size: 16px;
  width: 180px;
`
const NavigationItem = styled.div`
  width: 60px;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`
const StyledLink = styled(Link)`
  text-decoration: none;

  background-color: ${(props) => (props.isActive ? 'blue' : 'none')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
`
