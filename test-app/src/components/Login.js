import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getToken } from '../redux/token/actions'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const clickConfirmButton = () => {
    axios
      .post(
        'https://mycroft-test-api.herokuapp.com/login',
        { email: email, password: password },
        { headers: { 'Content-Type': `application/json` } },
      )
      .then((res) => {
        props.getToken(res.data.token)
        navigate('/')
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert('비밀번호는8자이상이여만합니다')
        }
      })
  }

  return (
    <LoginContainer>
      <InputContainer>
        {' '}
        <InputName>이메일</InputName>
        <Inputbox onChange={(e) => setEmail(e.target.value)} />
      </InputContainer>
      <InputContainer>
        {' '}
        <InputName>비밀번호</InputName>
        <Inputbox
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </InputContainer>
      <ConfirmButton onClick={clickConfirmButton}>확인</ConfirmButton>
    </LoginContainer>
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
const Inputbox = styled.input`
  width: 400px;
  height: 30px;

  border: 1px solid black;
  :focus {
    outline: none;
  }
`
const ConfirmButton = styled.div`
  cursor: pointer;
  width: 200px;
  height: 50px;
  background-color: blue;
  color: white;
  line-height: 50px;
  margin-top: 50px;
`
const InputContainer = styled.div`
  display: flex;
  margin-top: 50px;
  height: 30px;
`
const InputName = styled.div`
  width: 120px;
`
