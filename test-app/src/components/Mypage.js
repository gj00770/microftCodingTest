import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getToken } from '../redux/token/actions'
import Pages from './Pages'

function Item(props) {
  return (
    <StyledLink to={`/mypage/order/${props.itemId}`}>
      <ItemContainer>
        <ItemId>{props.itemId}</ItemId>
        <ItemName>{props.itemName}</ItemName>
      </ItemContainer>
    </StyledLink>
  )
}

function Mypage(props) {
  const [items, setItems] = useState('')
  const [page, setPage] = useState(0) //currentPage
  const [totalPage, setTotalPage] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    if (!props.token) {
      navigate('/login')
      return () => {
        alert('로그인해주세요')
      }
    }
    setItems('')
    axios
      .get(
        `https://mycroft-test-api.herokuapp.com/order?page=${page}`,

        { headers: { 'Content-Type': `application/json` } },
      )
      .then((res) => {
        setItems(res.data.content)
        setTotalPage(res.data.totalPages)
      })
  }, [page])
  return (
    <MypageContainer>
      {items ? (
        items.map((ele) => (
          <Item itemId={ele.id} itemName={ele.itemName} key={ele.id} />
        ))
      ) : (
        <div>....loading</div>
      )}
      {totalPage ? (
        <Pages setPage={setPage} totalPage={totalPage} page={page} />
      ) : null}
    </MypageContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
  }
}

export default connect(mapStateToProps)(Mypage)

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  line-height: 50px;
`
const ItemContainer = styled.div`
  display: flex;
  border: 1px solid black;
  width: 700px;
  margin-bottom: 10px;
  cursor: pointer;
`
const ItemId = styled.div`
  width: 50px;
  height: 50px;
  border-right: 1px solid black;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`
const ItemName = styled.div`
  padding-left: 10px;
`
