import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Service() {
  const [img, setImg] = useState(null)

  return (
    <ServiceContainer>
      {img ? <Image>로고</Image> : <ImageBox>이미지를 선택해주세요</ImageBox>}

      <PurchaseButton>구매하기</PurchaseButton>
    </ServiceContainer>
  )
}

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
const NavigationItem = styled.div`
  padding-left: 20px;
`
