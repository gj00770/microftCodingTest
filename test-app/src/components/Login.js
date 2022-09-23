import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function Login() {
  const [count, setCount] = useState(0)

  return (
    <LoginContainer>
      <Logo>로고</Logo>
      <NavigationContianer>
        <Link>
          <NavigationItem>서비스</NavigationItem>
        </Link>
        <Link>
          {' '}
          <NavigationItem>회원가입</NavigationItem>
        </Link>
        <Link>
          {' '}
          <NavigationItem>로그인</NavigationItem>
        </Link>
      </NavigationContianer>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
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
  font-size: 32px;
`
const NavigationItem = styled.div`
  padding-left: 20px;
`
