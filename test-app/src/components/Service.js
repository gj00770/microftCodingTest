import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
function Service(props) {
  const navigate = useNavigate()
  const handleOrder = () => {
    if (props.token) {
      alert('주문성공')
    } else {
      alert('로그인해주세요')
      navigate('./login')
    }
  }
  return (
    <ServiceContainer>
      <ImageBox src="https://mblogthumb-phinf.pstatic.net/MjAxNzAxMDdfMTE2/MDAxNDgzNzU1MDMyNTc0.hx5KAnplO4tzx7gyHo0OXzPvyCH5h7gfLjMf-S5qamAg.oUP8V58A0P0ZybvJw_-Dq57FbxOxV9o1MU4tRdnbORwg.JPEG.candle_yt/4.jpg?type=w800" />
      <PurchaseButton onClick={handleOrder}>구매하기</PurchaseButton>
    </ServiceContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default connect(mapStateToProps)(Service)

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageBox = styled.img`
  font-size: 14px;
  height: 400px;
  width: 700px;
`
const Image = styled.img`
  font-size: 32px;
`
const PurchaseButton = styled.div`
  cursor: pointer;
  background-color: blue;
  font-size: 18px;
  width: 200px;
  height: 50px;
  line-height: 50px;
  margin-top: 10px;
  color: white;
`
