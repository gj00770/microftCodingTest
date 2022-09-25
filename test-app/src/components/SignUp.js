import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getToken } from '../redux/token/actions'

const EMAILREX =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

function SignUp(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mobile, setMobile] = useState('')

  const emailRef = useRef()
  const navigate = useNavigate()

  const clickConfirmButton = () => {
    if (!EMAILREX.test(email)) {
      alert('이메일확인')
      emailRef.current.focus()
    } else if (password.length < 8 || password.length > 15) {
      alert('비밀번호확인')
    } else if (password !== confirmPassword) {
      alert('비밀번호불일치')
    } else {
      axios
        .post(
          'https://mycroft-test-api.herokuapp.com/sign-up',
          { email: email, password: password, mobile: mobile },
          { headers: { 'Content-Type': `application/json` } },
        )
        .then((res) => {
          props.getToken(res.data.token)
        })
      navigate('/')
    }
  }

  return (
    <SignUpContainer>
      <InputContainer>
        {' '}
        <InputName>이메일</InputName>
        <Inputbox
          onChange={(e) => setEmail(e.target.value)}
          validation={EMAILREX.test(email) || !email}
          ref={emailRef}
        />
      </InputContainer>
      <InputContainer>
        {' '}
        <InputName>비밀번호</InputName>
        <Inputbox
          onChange={(e) => setPassword(e.target.value)}
          validation={
            (password.length >= 8 && password.length <= 15) || !password
          }
          type="password"
        />
      </InputContainer>
      <InputContainer>
        {' '}
        <InputName>비밀번호 확인</InputName>
        <Inputbox
          onChange={(e) => setConfirmPassword(e.target.value)}
          validation={true}
          type="password"
        />
      </InputContainer>
      <InputContainer>
        {' '}
        <InputName>전화번호</InputName>
        <Inputbox
          onChange={(e) => {
            setMobile(e.target.value)
          }}
          validation={true}
        />
      </InputContainer>
      <ConfirmButton onClick={clickConfirmButton}>확인</ConfirmButton>
    </SignUpContainer>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
const Inputbox = styled.input`
  width: 400px;
  height: 30px;
  border: ${(props) =>
    props.validation ? '1px solid black' : '1px solid red'};
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
