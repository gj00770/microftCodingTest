import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

function ItemInfo(props) {
  const { itemId } = useParams()
  const [itemid, setItemId] = useState(null)
  const [itemName, setItemName] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    if (!props.token) {
      navigate('/login')
      return () => {
        alert('로그인해주세요')
      }
    }
    axios
      .get(
        `https://mycroft-test-api.herokuapp.com/order/${itemId}`,

        { headers: { 'Content-Type': `application/json` } },
      )
      .then((res) => {
        setItemId(res.data.id)
        setItemName(res.data.itemName)
      })
  }, [])
  return (
    <div>
      <ItemInfoContainer>
        <ItemId>{itemid}</ItemId>
        <ItemName>{itemName}</ItemName>
      </ItemInfoContainer>
      <ImageBox src="https://mblogthumb-phinf.pstatic.net/MjAxNzAxMDdfMTE2/MDAxNDgzNzU1MDMyNTc0.hx5KAnplO4tzx7gyHo0OXzPvyCH5h7gfLjMf-S5qamAg.oUP8V58A0P0ZybvJw_-Dq57FbxOxV9o1MU4tRdnbORwg.JPEG.candle_yt/4.jpg?type=w800" />
    </div>
  )
}

const ItemInfoContainer = styled.div`
  display: flex;
  width: 700px;
  margin-bottom: 10px;
  height: 50px;
  cursor: pointer;
  margin: 0 auto;
  align-items: center;
`
const ItemId = styled.div`
  height: 50px;
  line-height: 50px;
  width: 30px;
`
const ItemName = styled.div`
  padding-left: 10px;
`

const ImageBox = styled.img`
  font-size: 14px;
  height: 400px;
  width: 700px;
`
const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}
export default connect(mapStateToProps)(ItemInfo)
