import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getToken } from '../redux/token/actions'
function Service(props) {
  const [img, setImg] = useState(null)
  return (
    <ServiceContainer>
      {img ? (
        <Image>로고</Image>
      ) : (
        <ImageBox>이미지를 선택해주세요{props.token}</ImageBox>
      )}

      <PurchaseButton onClick={() => props.getToken('123')}>
        구매하기
      </PurchaseButton>
    </ServiceContainer>
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
export default connect(mapStateToProps, mapDispatchToProps)(Service)

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageBox = styled.div`
  font-size: 14px;
  height: 400px;
  width: 60vw;
  line-height: 400px;
  background-color: #d3d3d3;
`
const Image = styled.img`
  font-size: 32px;
`
const PurchaseButton = styled.div`
  background-color: blue;
  font-size: 32px;
  color: white;
`
