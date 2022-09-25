import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { getToken } from '../redux/token/actions'
import Pages from './Pages'
function Item() {
  return <div></div>
}

function Mypage(props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [items, setItems] = useState('')
  const [page, setPage] = useState(0) //currentPage
  const [totalPage, setTotalPage] = useState(0); 
  useEffect(() => {
    setItems('')
    axios
      .get(
        `https://mycroft-test-api.herokuapp.com/order?page=${page}`,

        { headers: { 'Content-Type': `application/json` } },
      )
      .then((res) => {
        console.log(res)
        setItems(res.data.content)
        setTotalPage(res.data.totalPages)
      })
  }, [page])
  return (
    <MypageContainer>
        {items? items.map((ele) => (
        <div key= {ele.id} >{ele.itemName}</div>
      )) : <div>....loading</div>}
      {totalPage? <Pages setPage={setPage} totalPage={totalPage}/> : null}
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
`
